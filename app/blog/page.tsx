import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Resume',
  description: 'My work experience and extracurricular involvement.',
}

export default function Page() {
  return (
    <section className="space-y-10">
      {/* Page header */}
      <header className="space-y-2">
        <h1 className="font-semibold text-3xl tracking-tight">My Resume</h1>
        <p className="text-muted-foreground">
          A quick overview of my work experience and extracurricular involvement.
        </p>
      </header>

      {/* Work Experience */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Work Experience</h2>

        <div className="space-y-6 text-sm">
          {/* Position 1 */}
          <div>
            <h3 className="font-medium">IT Data Intern · GAF</h3>
            <p className="text-muted-foreground">Parsippany, NJ · 06/2025 – 08/2025</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Rotated between Data Science, Data Engineering, and Data Analytics teams to enrich/track AI platform database</li>
              <li>Implemented cost calculation algorithms and user usage analytics of LLM’s to reduce manual reporting by 80%</li>
              <li>Configured stored procedures within BQ and a DAG within Airflow to automate AI ETL processes</li>
              <li>Created/presented Tableau dashboards to analysts/non-technical stakeholders on usage of company’s AI platform</li>
            </ul>
          </div>

          {/* Position 2 */}
          <div>
            <h3 className="font-medium">Undergraduate Research Assistant · Villanova University</h3>
            <p className="text-muted-foreground">Villanova, PA · 09/2025 – Current</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Collaborate with a team of 5 to analyze meta-analysis results in the education field using R, Qualtrics, etc.</li>
              <li>Perform design of experiments to determine how education professionals analyze data visualizations</li>
              <li>Create a tool that mitigates “Curse of Expertise” to help education professionals make informed decisions</li>
            </ul>
          </div>

          {/* Position 3 */}
          <div>
            <h3 className="font-medium">Information Technology Technician · Villanova University</h3>
            <p className="text-muted-foreground">Villanova, PA · 09/2024 – Current</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Assist with computer software/hardware problems, providing real time diagnosis and resolutions to 500+ clients</li>
              <li>Consult with hundreds of students/staff regarding issues with university technology and systems</li>
              <li>Provide help-desk support to maintain Villanova systems while creating service tickets to maintain records</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Extracurricular Involvement</h2>

        <div className="space-y-6 text-sm">
          {/* Activity 1 */}
          <div>
            <h3 className="font-medium">Co-Creator · Off-Campus Housing Tool</h3>
            <p className="text-muted-foreground">12/2024 – 01/2025</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Addressed the needs of Villanova University by tailoring the off-campus housing search for students</li>
              <li>Created a website and algorithm that ranks 21 cities closest to Villanova based on user lifestyle preferences</li>
              <li>Data scraped rental market data, crime-rates, public transit accessibility, commute times, etc.</li>
              <li>Created an interactive map of counties and cities near Villanova for users to learn more about surrounding area</li>
            </ul>
          </div>

          {/* Activity 2 */}
          <div>
            <h3 className="font-medium">Vice President · LASO</h3>
            <p className="text-muted-foreground">01/2024 – 01/2025</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Facilitated Villanova campus wide events of a student organization with a total membership of 700 people</li>
              <li>Directed executive board members (15 people) to raise thousands of dollars through donations and events</li>
              <li>Sponsor inclusivity and community within Villanova University</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  )
}
