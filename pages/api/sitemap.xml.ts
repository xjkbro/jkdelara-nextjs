import type { NextApiRequest, NextApiResponse } from "next";
const origin = "https://jkdelara.com";

function generateSiteMap(note, notes, projects) {
    return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <!--We manually set the two URLs we know already-->
       <url>
         <loc>${origin}</loc>
       </url>
       <url>
         <loc>${origin}/</loc>
       </url>
       <url>
         <loc>${origin}/dashboard</loc>
       </url>
       <url>
          <loc>${origin}/story</loc>
      </url>
      <url>
          <loc>${origin}/notes</loc>
      </url>
      <url>
          <loc>${origin}/arts</loc>
      </url>
      <url>
          <loc>${origin}/contact</loc>
      </url>
       ${note.data
           .map((x) => {
               return `
              <url>
                  <loc>${`${origin}/note/${x.attributes.slug}`}</loc>
              </url>
          `;
           })
           .join("")}
         ${notes.data
             .map((x) => {
                 return `
               <url>
                   <loc>${`${origin}/notes/${x.attributes.slug}`}</loc>
               </url>
           `;
             })
             .join("")}
          ${projects.data
              .map((x) => {
                  return `
                   <url>
                       <loc>${`${origin}/projects/${x.attributes.slug}`}</loc>
                   </url>
               `;
              })
              .join("")}
     </urlset>
   `;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    const noteURL =
        "https://cms.jkdelara.com/api/posts?fields[0]=id&fields[1]=slug";
    const notesURL =
        "https://cms.jkdelara.com/api/categories?fields[0]=id&fields[1]=slug";
    const projectsURL =
        "https://cms.jkdelara.com/api/projects?fields[0]=id&fields[1]=slug";
    const frontUrl = "https://localhost:3000";

    const reqNote = await fetch(noteURL);
    const reqNotes = await fetch(notesURL);
    const reqProjects = await fetch(projectsURL);
    const note = await reqNote.json();
    const notes = await reqNotes.json();
    const projects = await reqProjects.json();
    const sitemap = generateSiteMap(note, notes, projects);

    res.setHeader("Content-Type", "text/xml")
        .setHeader(
            "Cache-Control",
            "public, s-maxage=10, stale-while-revalidate=59"
        )
        .status(200)
        .send(sitemap);
}
