import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card h-100">
				<img className="card-img-top" src={props.images} alt="" />

				<div className="card-body">
					<h4 className="card-title">{props.title}</h4>
					<p className="card-text">{props.content}</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						{props.button}
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	button: PropTypes.string,
	images: PropTypes.string
};
