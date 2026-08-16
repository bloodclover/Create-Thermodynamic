ServerEvents.recipes(event => {

	// Recipe for miku apples
	event.shapeless(
		Item.of('minecraft:enchanted_golden_apple'),
		[
			'minecraft:apple',
			'8x minecraft:gold_block'
		]
	)

	// Buffing lazy stuff to give them a use
	event.remove({ output: 'createadditionallogistics:lazy_shaft' })
	event.shapeless(
		Item.of('createadditionallogistics:lazy_shaft', 6),'4x create:shaft'
	)

	event.remove({ output: 'createadditionallogistics:lazy_cogwheel' })
        event.shapeless(
                Item.of('createadditionallogistics:lazy_cogwheel', 5),'4x create:cogwheel'
        )

        event.remove({ output: 'createadditionallogistics:lazy_large_cogwheel' })
        event.shapeless(
                Item.of('createadditionallogistics:lazy_large_cogwheel', 5),'4x create:cogwheel'
        )
})
