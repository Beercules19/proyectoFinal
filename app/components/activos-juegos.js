import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ActivosJuegosComponent extends Component {
	@action
		onSunmit () {
			this.args.handleSubmit();
		}
}