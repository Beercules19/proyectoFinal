import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AppIndexController extends Controller {
	@action onSubmit(){
		console.log("created!");
		let record = this.store.createRecord('games', {
			status:"Pending",
		});
		record.save();
	}

	@action onJoin(id, gameId){
		console.log(id, gameId);
		let playable = this.store.createRecord('play', {
			game_id:gameId,
			user_id: id,
		});
		playable.save();
	}
}
