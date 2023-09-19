export const Scripts: ModdedBattleScriptsData = {
	inherit: 'gen6',
	init() {
		this.modData('Learnsets', 'tyranitar').learnset.sandblast = ['5M'];
		this.modData('Learnsets', 'hippowdon').learnset.sandblast = ['5M'];
		this.modData('Learnsets', 'ninetales').learnset.eruption = ['5M'];
		this.modData('Learnsets', 'arcanine').learnset.eruption = ['5M'];
		this.modData('Learnsets', 'houndoom').learnset.eruption = ['5M'];
	},
	gen: 5,
};
