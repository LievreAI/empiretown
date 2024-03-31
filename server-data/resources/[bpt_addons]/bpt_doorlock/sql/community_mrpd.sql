/*
	Run this file after bpt_doorlock.sql
	Works with https://www.gta5-mods.com/maps/community-mission-row-pd
*/

INSERT INTO `bpt_doorlock` (`id`, `name`, `data`) VALUES
	(1, 'community_mrpd 1', '{"coords":{"x":434.7478942871094,"y":-981.916748046875,"z":30.83926963806152},"groups":{"police":0,"offpolice":0},"maxDistance":2.5,"state":0,"doors":[{"coords":{"x":434.7478942871094,"y":-980.618408203125,"z":30.83926963806152},"model":-1215222675,"heading":270},{"coords":{"x":434.7478942871094,"y":-983.215087890625,"z":30.83926963806152},"model":320433149,"heading":270}],"hideUi":false}'),
	(2, 'community_mrpd 2', '{"coords":{"x":468.6697998046875,"y":-1014.4520263671875,"z":26.53623962402343},"groups":{"police":0},"maxDistance":2.5,"state":1,"doors":[{"coords":{"x":469.9679870605469,"y":-1014.4520263671875,"z":26.53623962402343},"model":-2023754432,"heading":180},{"coords":{"x":467.3716125488281,"y":-1014.4520263671875,"z":26.53623962402343},"model":-2023754432,"heading":0}],"hideUi":false}'),
	(3, 'community_mrpd 3', '{"coords":{"x":463.4783020019531,"y":-1003.5380249023438,"z":25.00598907470703},"model":-1033001619,"groups":{"police":0},"heading":0,"maxDistance":2,"state":1,"hideUi":false}'),
	(4, 'community_mrpd 4', '{"coords":{"x":488.8948059082031,"y":-1017.2100219726563,"z":27.14863014221191},"auto":true,"lockSound":"button-remote","groups":{"police":0},"heading":90,"maxDistance":5,"state":1,"model":-1603817716,"hideUi":false}'),
	(5, 'community_mrpd 5', '{"coords":{"x":431.4056091308594,"y":-1001.1690063476563,"z":26.71261024475097},"auto":true,"lockSound":"button-remote","groups":{"police":0},"heading":0,"maxDistance":5,"state":1,"model":-190780785,"hideUi":false}'),
	(6, 'community_mrpd 6', '{"coords":{"x":436.223388671875,"y":-1001.1690063476563,"z":26.71261024475097},"auto":true,"lockSound":"button-remote","groups":{"police":0},"heading":0,"maxDistance":5,"state":1,"model":-190780785,"hideUi":false}'),
	(7, 'community_mrpd 7', '{"coords":{"x":450.10418701171877,"y":-985.7384033203125,"z":30.83930969238281},"model":1557126584,"groups":{"police":0,"offpolice":0},"heading":90,"maxDistance":2,"state":1,"hideUi":false}'),
	(8, 'community_mrpd 8', '{"coords":{"x":464.15838623046877,"y":-1011.260009765625,"z":33.01121139526367},"model":507213820,"groups":{"police":0},"heading":0,"maxDistance":2,"state":1,"hideUi":false}'),
	(9, 'community_mrpd 9', '{"coords":{"x":461.2864990234375,"y":-985.3206176757813,"z":30.83926963806152},"model":749848321,"groups":{"police":0},"heading":90,"maxDistance":2,"state":1,"hideUi":false}'),
	(10, 'community_mrpd 10', '{"coords":{"x":446.57281494140627,"y":-980.0106201171875,"z":30.83930969238281},"model":-1320876379,"groups":{"police":0},"heading":180,"maxDistance":2,"state":1,"hideUi":false}'),
	(11, 'community_mrpd 11', '{"coords":{"x":453.09381103515627,"y":-983.2293701171875,"z":30.83926963806152},"model":-1033001619,"groups":{"police":0},"heading":91,"maxDistance":2,"state":1,"hideUi":false}'),
	(12, 'community_mrpd 12', '{"coords":{"x":464.36138916015627,"y":-984.677978515625,"z":43.83443832397461},"model":-340230128,"groups":{"police":0},"heading":90,"maxDistance":2,"state":1,"hideUi":false}'),
	(13, 'community_mrpd 13', '{"coords":{"x":442.6625061035156,"y":-988.2412719726563,"z":26.81977081298828},"model":-131296141,"groups":{"police":0},"heading":179,"maxDistance":2,"state":1,"hideUi":false}'),
	(14, 'community_mrpd 14', '{"coords":{"x":471.3153991699219,"y":-986.1090698242188,"z":25.05794906616211},"model":-131296141,"groups":{"police":0},"heading":270,"maxDistance":2,"state":1,"hideUi":false}'),
	(15, 'community_mrpd 15', '{"coords":{"x":467.5935974121094,"y":-977.9932861328125,"z":25.05794906616211},"model":-131296141,"groups":{"police":0},"heading":180,"maxDistance":2,"state":1,"hideUi":false}'),
	(16, 'community_mrpd 16', '{"coords":{"x":463.6145935058594,"y":-980.5814208984375,"z":25.05794906616211},"model":-131296141,"groups":{"police":0},"heading":90,"maxDistance":2,"state":1,"hideUi":false}'),
	(17, 'community_mrpd 17', '{"coords":{"x":464.5701904296875,"y":-992.6641235351563,"z":25.0644302368164},"model":631614199,"lockSound":"metal-locker","groups":{"police":0},"heading":0,"maxDistance":2,"state":1,"unlockSound":"metallic-creak","hideUi":false}'),
	(18, 'community_mrpd 18', '{"coords":{"x":461.8064880371094,"y":-994.4086303710938,"z":25.0644302368164},"model":631614199,"lockSound":"metal-locker","groups":{"police":0},"heading":270,"maxDistance":2,"state":1,"unlockSound":"metallic-creak","hideUi":false}'),
	(19, 'community_mrpd 19', '{"coords":{"x":461.8064880371094,"y":-997.6583862304688,"z":25.0644302368164},"model":631614199,"lockSound":"metal-locker","groups":{"police":0},"heading":90,"maxDistance":2,"state":1,"unlockSound":"metallic-creak","hideUi":false}'),
	(20, 'community_mrpd 20', '{"coords":{"x":461.8064880371094,"y":-1001.302001953125,"z":25.0644302368164},"model":631614199,"lockSound":"metal-locker","groups":{"police":0},"heading":90,"maxDistance":2,"state":1,"unlockSound":"metallic-creak","hideUi":false}'),
	(21, 'community_mrpd 21', '{"coords":{"x":467.19219970703127,"y":-996.4594116210938,"z":25.00598907470703},"model":-1033001619,"groups":{"police":0},"heading":0,"maxDistance":2,"state":1,"hideUi":false}'),
	(22, 'community_mrpd 22', '{"coords":{"x":471.4754943847656,"y":-996.4594116210938,"z":25.00598907470703},"model":-1033001619,"groups":{"police":0},"heading":0,"maxDistance":2,"state":1,"hideUi":false}'),
	(23, 'community_mrpd 23', '{"coords":{"x":475.7543029785156,"y":-996.4594116210938,"z":25.00598907470703},"model":-1033001619,"groups":{"police":0},"heading":0,"maxDistance":2,"state":1,"hideUi":false}'),
	(24, 'community_mrpd 24', '{"coords":{"x":480.03009033203127,"y":-996.4594116210938,"z":25.00598907470703},"model":-1033001619,"groups":{"police":0},"heading":0,"maxDistance":2,"state":1,"hideUi":false}'),
	(25, 'community_mrpd 25', '{"coords":{"x":468.4872131347656,"y":-1003.5479736328125,"z":25.01313972473144},"model":-1033001619,"groups":{"police":0},"heading":180,"maxDistance":2,"state":1,"hideUi":false}'),
	(26, 'community_mrpd 26', '{"coords":{"x":471.4747009277344,"y":-1003.5380249023438,"z":25.01222991943359},"model":-1033001619,"groups":{"police":0},"heading":0,"maxDistance":2,"state":1,"hideUi":false}'),
	(27, 'community_mrpd 27', '{"coords":{"x":477.0495910644531,"y":-1003.552001953125,"z":25.01203918457031},"auto":false,"groups":{"police":0},"heading":179,"lockpick":false,"maxDistance":2,"state":1,"model":-1033001619,"hideUi":false}'),
	(28, 'community_mrpd 28', '{"coords":{"x":480.03009033203127,"y":-1003.5380249023438,"z":25.00598907470703},"model":-1033001619,"groups":{"police":0},"heading":0,"maxDistance":2,"state":1,"hideUi":false}'),
	(29, 'community_mrpd 29', '{"coords":{"x":444.7078857421875,"y":-989.4453735351563,"z":30.83930969238281},"groups":{"police":0},"maxDistance":2.5,"state":1,"doors":[{"coords":{"x":443.4078063964844,"y":-989.4453735351563,"z":30.83930969238281},"model":185711165,"heading":180},{"coords":{"x":446.00799560546877,"y":-989.4453735351563,"z":30.83930969238281},"model":185711165,"heading":0}],"hideUi":false}'),
	(30, 'community_mrpd 30', '{"coords":{"x":445.9197998046875,"y":-999.0016479492188,"z":30.7890396118164},"groups":{"police":0},"maxDistance":2.5,"state":1,"doors":[{"coords":{"x":447.2184143066406,"y":-999.0023193359375,"z":30.78941917419433},"model":-1033001619,"heading":180},{"coords":{"x":444.6211853027344,"y":-999.0009765625,"z":30.78866004943847},"model":-1033001619,"heading":0}],"hideUi":false}'),
	(31, 'community_mrpd 31', '{"coords":{"x":445.9298400878906,"y":-997.044677734375,"z":30.84351921081543},"groups":{"police":0},"maxDistance":2.5,"state":0,"doors":[{"coords":{"x":444.62939453125,"y":-997.044677734375,"z":30.84351921081543},"model":-2023754432,"heading":0},{"coords":{"x":447.23028564453127,"y":-997.044677734375,"z":30.84351921081543},"model":-2023754432,"heading":180}],"hideUi":false}')
;