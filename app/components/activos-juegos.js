import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ActivosJuegosComponent extends Component {
	@action
		onSunmit () {
			this.args.handleSubmit();
		}
}