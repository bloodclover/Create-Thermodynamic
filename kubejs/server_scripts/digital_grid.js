ServerEvents.recipes(event => {
	event.shaped(
	Item.of('digitalgrid:din_rack', 4),
	 [
		' C ',
		'III',
		' C '
	 ],
	 {
		C: 'powergrid:wire',
		I: 'create:iron_sheet'
	 }
	)
})
