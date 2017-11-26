import R from "ramda";
import Consts from "../../consts";

export default (state = [], action) =>
	((action.type === Consts.Actions.CREATE && R.append(action.uuid)) ||
		R.identity)(state);