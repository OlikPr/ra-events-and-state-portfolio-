import { useState, useEffect } from 'react'
import { Toolbar } from '../Toolbar/Toolbar.jsx'
import { ProjectList } from '../ProjectList/ProjectList.jsx'
import { cards } from "../../cards.js";

export const Portfolio = () => {
  const [selected, setSelected] = useState('All')
  const [projects, setProjects] = useState(cards)

  const onSelectFilter = (filter) => setSelected(filter)

  useEffect(() => {
    if (selected === "All") {
      setProjects(cards);
    } else {
      setProjects(cards.filter((card) => card.category === selected));
    }
  }, [selected]);

  return (
    <div>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />

      <ProjectList 
        projects={projects}
      />
    </div>
  )
}
