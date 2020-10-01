import React, { PureComponent } from "react";
import {
	Card,
	CardImg,
	CardImgOverlay,
	CardText,
	CardBody,
	CardTitle,
} from "reactstrap";

export default class DishDetail extends PureComponent {
	constructor(props) {
		super(props);
	}
	renderDish(dish) {
		if (dish != null) {
			return (
				<div className="row">
					<div className="col-12 col-md-5 mt-1">
						<Card>
							<CardImg width="100%" src={dish.image} alt={dish.name} />
							<CardBody>
								<CardTitle>{dish.name}</CardTitle>
								<CardText>{dish.description}</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="col-12 col-md-5 m-1">
						<div>
							<h4>Comments</h4>
							{this.renderComments(dish.comments)}
						</div>
					</div>
				</div>
			);
		} else {
			return <div></div>;
		}
	}

	renderComments(comment) {
		if (comment) {
			let options = { year: "numeric", month: "short", day: "numeric" };
			return (
				<ul className="list-unstyled">
					{comment.map((cmt) => {
						return (
							<li>
								<p>{cmt.comment}</p>
								<p>
									-- {cmt.author} , 
									{" "}{new Date(cmt.date).toLocaleDateString("en-US", options)}
								</p>
							</li>
						);
					})}
				</ul>
			);
		} else {
			return <div></div>;
		}
	}
	render() {
		return <div>{this.renderDish(this.props.dish)}</div>;
	}
}
