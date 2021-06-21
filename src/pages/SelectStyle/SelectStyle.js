import React, { useRef } from "react";

import Menu from "../../components/Menu/Menu";
import MenuOption from "../../components/MenuOption/MenuOption";
import AppContext from "../../contexts/AppContext";
import SVGIcon from "../../components/SVGIcon/SVGIcon";
import { useHistory } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./SelectStyle.scss";

function SelectStyle() {
	const nodeRef = useRef(null);
	const { machineData, setUserOrder } = React.useContext(AppContext);

	let history = useHistory();

	const handleClick = (type) => {
		setUserOrder({ type });
		history.push("/contactless-payment");
	};

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
									onClick={() => handleClick(type)}
									key={key}
									title={type.name}
									icon={<SVGIcon name={type.name} />}
								/>
							))}
						</div>
					</CSSTransition>
				</TransitionGroup>
			</Menu>
		</div>
	);
}

export default SelectStyle;
