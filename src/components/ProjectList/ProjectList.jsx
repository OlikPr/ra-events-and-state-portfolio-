
import PropTypes from "prop-types";

export const ProjectList = ({ projects }) => (
  <main>
    {projects.map((project, index) => (
      <img
        key={index}
        src={project.img}
        alt={project.description || ""}
        data-category={project.category}
      />
    ))}
  </main>
);

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};