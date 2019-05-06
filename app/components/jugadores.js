import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class JugadoresComponent extends Component {
	@service('user_selected') user_global;
  @tracked user_info;
  @tracked game_id;
  @tracked choice;

  @action async setUser(id){
    await this.args.getUser(id);
  }

  @action setIds(user, game){
    this.game_id=game;
  }
  
  @action onChange(index){
    this.choice=index;
  }

  @action async onSubmit(user, game, id){
    await this.args.handleSubmit(user, game, id, this.choice);
    alert("action was submitted");	
  }
}