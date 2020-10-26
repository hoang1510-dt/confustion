import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const RenderDish = (dish) => {
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
						{RenderComments(dish.comments)}
					</div>
				</div>
			</div>
		);
	} else {
		return <div></div>;
	}
};

const RenderComments = (comment) => {
	if (comment) {
		let options = { year: "numeric", month: "short", day: "numeric" };
		return (
			<ul className="list-unstyled">
				{comment.map((cmt) => {
					return (
						<li>
							<p>{cmt.comment}</p>
							<p>
								-- {cmt.author} ,{" "}
								{new Date(cmt.date).toLocaleDateString("en-US", options)}
							</p>
						</li>
					);
				})}
			</ul>
		);
	} else {
		return <div></div>;
	}
};
const DishDetail = (props) => {
	return (
		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/menu">Menu</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h3>{props.dish.name}</h3>
					<hr />
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-5 m-1">
					<RenderDish dish={props.dish} />
				</div>
				<div className="col-12 col-md-5 m-1">
					<RenderComments comments={props.comments} />
				</div>
			</div>
		</div>
	);
};
export default DishDetail;
