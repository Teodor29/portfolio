const Skills = ({ skills }) => {
  return (
    <section id="skills" className="section">
      <h2 className="section-heading">SKILLS</h2>
      <div className="flex flex-col gap-3 md:gap-6">
        {skills.map(({ category, items }) => (
          <div key={category}>
            <div className="">
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-2 text-fg-muted">
                {category}
              </h3>
              <ul className="flex gap-2 md:gap-3 pl-0 list-none flex-wrap">
                {items.map((skill) => (
                  <li key={skill} className="pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
