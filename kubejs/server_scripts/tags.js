ServerEvents.tags('item', event => {
	event.remove('c:wire/copper', 'electroenergetics:copper_wire')
	event.remove('c:wire/iron', 'electroenergetics:iron_wire')
	event.remove('c:buckets', 'electroenergetics:plant_oil_bucket')
	event.add('c:integrated_circuit', 'ccbr:integrated_circuit')
	event.add('c:integrated_circuit', 'powergrid:integrated_circuit')
})

ServerEvents.tags('block', event => {

})

ServerEvents.tags('fluid', event => {
	event.remove('create:bottomless/allow', 'minecraft:lava')
	event.remove('c:plantoil', 'electroenergetics:plant_oil')
})

ServerEvents.tags('entity_type', event => {

})
