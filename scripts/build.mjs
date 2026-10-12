import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import content from '../content.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'dist');
await fs.mkdir(out, { recursive: true });
const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const tokens = {
  NAME: content.name, SHORT_NAME: content.shortName, INITIALS: content.initials,
  ROLE: content.title, HEADLINE_1: content.headline[0], HEADLINE_2: content.headline[1],
  INTRO: content.intro, ABOUT: content.about, SCHOOL: content.education.school,
  EDUCATION_DATES: content.education.dates, EDUCATION_NOTE: content.education.note,
  GITHUB: content.github, LINKEDIN: content.linkedin, PROJECT_NAME: content.project.name,
  PROJECT_SUBTITLE: content.project.subtitle, PROJECT_DESCRIPTION: content.project.description,
  PROJECT_CATEGORY: content.project.category, PROJECT_YEAR: content.project.year,
  AWARD: content.project.award, AWARD_CONTEXT: content.project.awardContext,
  PROJECT_STORY: content.project.story, PROJECT_SOURCE: content.project.source,
  CONTACT_URL: content.email ? `mailto:${content.email}` : content.linkedin,
  CONTACT_LABEL: content.email ? 'Send me an email' : 'Connect on LinkedIn'
};
let html = await fs.readFile(path.join(root, 'index.html'), 'utf8');
html = html.replace(/\{\{([A-Z_0-9]+)\}\}/g, (match, key) => {
  if (!(key in tokens)) throw new Error(`Unknown content token: ${key}`);
  return escape(tokens[key]);
});
html = html.replace('<!-- PROJECT_DETAILS -->', content.project.details.map(item => `<article><h3>${escape(item.title)}</h3><p>${escape(item.body)}</p></article>`).join('\n'));
html = html.replace('<!-- CERTIFICATIONS -->', content.certifications.map(item => `<div class="credential"><h3>${escape(item.name)}</h3><span>${escape(item.issuer)}</span><time>${escape(item.date)}</time></div>`).join('\n'));
html = html.replace('<!-- WORKSHOP_PROJECTS -->', content.workshop.map(project => {
  const url = `${content.github}/${encodeURIComponent(project.repository)}`;
  return `<a class="repo-row" href="${escape(url)}" target="_blank" rel="noopener noreferrer"><h3>${escape(project.name)}</h3><p>${escape(project.description || 'Explore the source code and project details.')}</p><span class="language">GitHub</span><span class="arrow" aria-hidden="true">↗</span></a>`;
}).join('\n'));
html = html.replace('<!-- ADDITIONAL_PROJECTS -->', (content.additionalProjects || []).map(project => `
  <article class="featured-project additional-project">
    <div class="project-art"><img src="/assets/${escape(project.image)}" width="1024" height="1024" loading="lazy" alt="${escape(project.imageAlt)}"></div>
    <div class="project-copy">
      <div class="project-meta"><span>${escape(project.category)}</span><span>${escape(project.team)}</span></div>
      <h3>${escape(project.name)}</h3><p class="project-subtitle">${escape(project.subtitle)}</p><p>${escape(project.description)}</p>
      <div class="award"><strong>${escape(project.award)}</strong><span>${escape(project.awardContext)}</span></div>
      <button class="text-link project-trigger" data-dialog="${escape(project.id)}-dialog" type="button" aria-haspopup="dialog">Explore the project <span aria-hidden="true">↗</span></button>
    </div>
  </article>`).join('\n'));
html = html.replace('<!-- ADDITIONAL_DIALOGS -->', (content.additionalProjects || []).map(project => `
  <dialog id="${escape(project.id)}-dialog" aria-labelledby="${escape(project.id)}-title">
    <div class="dialog-top"><span>${escape(project.category)}</span><button class="dialog-close" type="button" aria-label="Close ${escape(project.name)} story">Close ×</button></div>
    <div class="dialog-body"><h2 id="${escape(project.id)}-title">${escape(project.name)}</h2><p class="dialog-intro">${escape(project.subtitle)}</p>
      <p>Developed by ${escape(project.team)}.</p><div class="dialog-award"><strong>${escape(project.award)}</strong><p>${escape(project.awardContext)}</p></div><p>${escape(project.story)}</p>
      <div class="project-details">${project.details.map(item => `<article><h3>${escape(item.title)}</h3><p>${escape(item.body)}</p></article>`).join('')}</div>
      <div class="technology-list"><h3>Technologies & skills</h3><ul>${project.technologies.map(technology => `<li>${escape(technology)}</li>`).join('')}</ul></div>
      <a class="text-link" href="${escape(project.source)}" target="_blank" rel="noopener noreferrer">Read the project post on LinkedIn ↗</a>
      <p class="art-note">Conceptual cover artwork, not a product screenshot or a real fishing advisory.</p>
    </div>
  </dialog>`).join('\n'));
await fs.writeFile(path.join(out, 'index.html'), html);
await fs.copyFile(path.join(root, 'styles.css'), path.join(out, 'styles.css'));
await fs.copyFile(path.join(root, 'app.js'), path.join(out, 'app.js'));
await fs.writeFile(path.join(out, 'profile.json'), JSON.stringify({ githubUsername: content.githubUsername, github: content.github }));
await fs.cp(path.join(root, 'assets'), path.join(out, 'assets'), { recursive: true });
await fs.writeFile(path.join(out, 'robots.txt'), 'User-agent: *\nAllow: /\n');
console.log(`Built ${content.name}’s portfolio → ${out}`);
