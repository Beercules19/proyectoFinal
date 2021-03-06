import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class UiJuegosComponent extends Component {
	@service('user_selected') user_global;
  @tracked games = this.args.games || [];
  @tracked user_id = "3";

  @action onChange(index){
    this.user_id = index;
    this.user_global.set('user', index);
  }
  @action async onJoin(gameId){
    await this.args.handleJoin(this.user_id, gameId);
    alert("Joined the game");
	}
}