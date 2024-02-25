return {
	{
		coords = vec3(452.3, -991.4, 30.7),
		target = {
			loc = vec3(451.25, -994.28, 30.69),
			length = 1.2,
			width = 5.6,
			heading = 0,
			minZ = 29.49,
			maxZ = 32.09,
			label = "Open personal locker",
		},
		name = "policelocker",
		label = "Personal locker",
		owner = true,
		slots = 70,
		weight = 70000,
		groups = shared.police,
	},

	{
		coords = vec3(306.606598, -601.569214, 43.282104),
		target = {
			loc = vec3(306.606598, -601.569214, 43.282104),
			length = 0.6,
			width = 1.8,
			heading = 340,
			minZ = 43.34,
			maxZ = 44.74,
			label = "Open personal locker",
		},
		name = "emslocker",
		label = "Personal Locker",
		owner = true,
		slots = 70,
		weight = 70000,
		groups = { ["ambulance"] = 0 },
	},

	{
		coords = vec3(129.507690, -1281.454956, 29.263062),
		target = {
			loc = vec3(129.507690, -1281.454956, 29.263062),
			length = 0.6,
			width = 1.8,
			heading = 340,
			minZ = 43.34,
			maxZ = 44.74,
			label = "Storage",
		},
		name = "unicornlocker",
		label = "Storage",
		owner = false,
		slots = 70,
		weight = 70000,
		groups = { ["unicorn"] = 0 },
	},
}
