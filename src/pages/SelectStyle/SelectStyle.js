import React, { useRef } from "react";
import Menu from "../../components/Menu/Menu";
import MenuOption from "../../components/MenuOption/MenuOption";
import AppContext from "../../contexts/AppContext";
import SVGIcon from "../../components/SVGIcon/SVGIcon";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./SelectStyle.scss";

function SelectStyle() {
	const { machineData } = React.useContext(AppContext);
	const nodeRef = useRef(null);

	return (
		<div className="SelectStyle">
			<h2 className="SelectStyle__title">Select your style</h2>
			<Menu>
				<TransitionGroup appear={true}>
					<CSSTransition
						key="dd"
						classNames="fade-ap"
						timeout={300}
						nodeRef={nodeRef}
					>
						<div ref={nodeRef}>
							{machineData.types?.map((type, key) => (
								<MenuOption
									key={key}
									title={type.name}
									icon={<SVGIcon name={type.name} />}
								/>
							))}
							<Link to="/contactless-payment">
								ContactLess payment
							</Link>
						</div>
					</CSSTransition>
				</TransitionGroup>
			</Menu>
		</div>
	);
}

export default SelectStyle;
