import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AppIndexController extends Controller {
	@action onSubmit(){
		let record = this.store.createRecord('games', {
			status:"Pending",
		});
		record.save();
	}

	@action onJoin(id, gameId){
		let playable = this.store.createRecord('play', {
			game_id:gameId,
			user_id: id,
		});
		playable.save();
	}
}
