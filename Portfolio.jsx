Portfolio = React.createClass({
	renderProjects() {
    return this.data.projects.map((project) => {
      return (
        <Project key={project._id} project={project} />
        );
    });
  },
	render(){
		return(
			<div className="portfolio">
				<h1>Projects</h1>
				{this.renderProjects}
			</div>

			);
	}


});