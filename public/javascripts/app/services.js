﻿var nTournamentServices = angular.module('nTournamentServices', []);

nTournamentServices.service('Tournament',
    function () {
    var tournamentlist = [
            {
        "tournamentId": "wl2014autumnscII",
        "name": "Star Craft II - Whatever the new expansionname is...",
        "tournamentStartTime": "2014-08-14 12:00",
        "registrationStartTime": "2014-08-01 10:00",
        "registrationEndTime": "2014-08-14 10:00",
        "streamLink": "http://twitch.tv/mollyporph",
        "priority": 1,
        "tournamentthumb": "http://strategy-game-guides.com/wp-content/uploads/2013/03/HotS-Banner-Game-Banner.jpg",
        "tournamentHeaderImage": "http://strategy-game-guides.com/wp-content/uploads/2013/03/HotS-Banner-Game-Banner.jpg",
        "rules": [
                    {
            "key": "format",
            "values": ["1v1 best of 1, best of 3 in finals"]
        },
                    {
            "key": "mappool",
            "value": ["TBD"]
        }
                ],
        "teams": [
                    {
            "id": "d32aca64-713e-40b5-b2ff-9b32d7805ca4",
            "name": "Go Walls Team!",
            "teamLogoUrl": "http://retro-computing.com/wp-content/uploads/2013/06/Minecraft-The-Walls-Minecade.jpg",
            "members": [
                            {
                "id": "ef74a2f9-3dff-4971-bf54-6d3225077cc7",
                "username": "mollyporph",
                "inGameName": "mollyporph",
                "avatarurl": "http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/54/545d80e6849929e242ceda076547e6f379256cd2_full.jpg"
            }
                        ]
        },
                    {
            "id": "092a994d-370d-418d-b475-d6955c2d33bd",
            "name": "Clippies!",
            "teamLogoUrl": "http://paul-way.com/wp-content/uploads/2014/03/microsoft-clippy.jpg",
            "members": [
                            {
                "id": "229d32a0-46a8-4315-a8b0-d23f0534e692",
                "username": "baronen",
                "inGameName": "baronen",
                "avatarurl": "http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/5a/5affd4cb2a358132cc36bf7cf1fd5a1865596eee_full.jpg"
            }
                        ]
        }
                ],
        "description": "<p>Rich in heavy atoms, a billion trillion gathered by gravity, from which we spring dream of the mind's eye finite but unbounded Flatland a billion trillion. Cosmic fugue? Culture radio telescope sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam network of wormholes permanence of the stars tendrils of gossamer clouds great turbulent clouds, a very small stage in a vast cosmic arena corpus callosum how far away intelligent beings, culture corpus callosum realm of the galaxies concept of the number one rich in mystery.</p><p>Colonies. Two ghostly white figures in coveralls and helmets are soflty dancing. Shores of the cosmic ocean muse about quis nostrum exercitationem ullam corporis suscipit laboriosam billions upon billions radio telescope vastness is bearable only through love realm of the galaxies another world, a mote of dust suspended in a sunbeam, trillion, preserve and cherish that pale blue dot, citizens of distant epochs radio telescope. Billions upon billions a billion trillion decipherment, rich in heavy atoms preserve and cherish that pale blue dot dream of the mind's eye cosmic ocean encyclopaedia galactica. Finite but unbounded adipisci velit globular star cluster the carbon in our apple pies muse about sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>"
            },
                 {
                     "tournamentId": "wl2014autumnscII2",
                     "name": "Star Craft II - Whatever the new expansionname is...",
                     "tournamentStartTime": "2014-08-14 12:00",
                     "registrationStartTime": "2014-08-01 10:00",
                     "registrationEndTime": "2014-08-14 10:00",
                     "streamLink": "http://twitch.tv/mollyporph",
                     "priority": 1,
                     "tournamentthumb": "http://strategy-game-guides.com/wp-content/uploads/2013/03/HotS-Banner-Game-Banner.jpg",
                     "tournamentHeaderImage": "http://strategy-game-guides.com/wp-content/uploads/2013/03/HotS-Banner-Game-Banner.jpg",
                     "rules": [
                                 {
                                     "key": "format",
                                     "values": ["1v1 best of 1, best of 3 in finals"]
                                 },
                                 {
                                     "key": "mappool",
                                     "value": ["TBD"]
                                 }
                     ],
                     "teams": [
                                 {
                                     "id": "d32aca64-713e-40b5-b2ff-9b32d7805ca4",
                                     "name": "Go Walls Team!",
                                     "teamLogoUrl": "http://retro-computing.com/wp-content/uploads/2013/06/Minecraft-The-Walls-Minecade.jpg",
                                     "members": [
                                                     {
                                                         "id": "ef74a2f9-3dff-4971-bf54-6d3225077cc7",
                                                         "username": "mollyporph",
                                                         "inGameName": "mollyporph",
                                                         "avatarurl": "http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/54/545d80e6849929e242ceda076547e6f379256cd2_full.jpg"
                                                     }
                                     ]
                                 },
                                 {
                                     "id": "092a994d-370d-418d-b475-d6955c2d33bd",
                                     "name": "Clippies!",
                                     "teamLogoUrl": "http://paul-way.com/wp-content/uploads/2014/03/microsoft-clippy.jpg",
                                     "members": [
                                                     {
                                                         "id": "229d32a0-46a8-4315-a8b0-d23f0534e692",
                                                         "username": "baronen",
                                                         "inGameName": "baronen",
                                                         "avatarurl": "http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/5a/5affd4cb2a358132cc36bf7cf1fd5a1865596eee_full.jpg"
                                                     }
                                     ]
                                 }
                     ],
                     "description": "<p>Rich in heavy atoms, a billion trillion gathered by gravity, from which we spring dream of the mind's eye finite but unbounded Flatland a billion trillion. Cosmic fugue? Culture radio telescope sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam network of wormholes permanence of the stars tendrils of gossamer clouds great turbulent clouds, a very small stage in a vast cosmic arena corpus callosum how far away intelligent beings, culture corpus callosum realm of the galaxies concept of the number one rich in mystery.</p><p>Colonies. Two ghostly white figures in coveralls and helmets are soflty dancing. Shores of the cosmic ocean muse about quis nostrum exercitationem ullam corporis suscipit laboriosam billions upon billions radio telescope vastness is bearable only through love realm of the galaxies another world, a mote of dust suspended in a sunbeam, trillion, preserve and cherish that pale blue dot, citizens of distant epochs radio telescope. Billions upon billions a billion trillion decipherment, rich in heavy atoms preserve and cherish that pale blue dot dream of the mind's eye cosmic ocean encyclopaedia galactica. Finite but unbounded adipisci velit globular star cluster the carbon in our apple pies muse about sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>"
                 }
        ];
    this.tournaments = function () {
        return tournamentlist;
    };
    this.tournament = function (tournamentId) {
        return Enumerable.From(tournamentlist).SingleOrDefault(null,function(i) { return i.tournamentId == tournamentId; });
    }
    this.addTournament = function (tournament) {
        tournaments.push(tournament);
    }
});
    