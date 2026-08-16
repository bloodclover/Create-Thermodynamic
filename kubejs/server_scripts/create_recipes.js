ServerEvents.recipes(event => {
	event.recipes.create.crushing(['2x create:experience_nugget', CreateItem.of('create:experience_nugget', 0.3)], 'minecraft:infested_stone')
	
	event.recipes.create.crushing(CreateItem.of('minecraft:blaze_powder', 0.1), 'create:scoria')
	
	event.recipes.create.milling(['2x minecraft:sugar', CreateItem.of('minecraft:sugar', 0.1)], 'corn_delight:corn_seeds')

	event.recipes.create.mixing(CreateItem.of('expandeddelight:salt', 0.75), Fluid.of('minecraft:water', '100')).heated()
})
