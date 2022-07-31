import { Filter } from "./filter"

function dbFractionLocal() {
    const dbFraction = {
        nilfgaard: {
            name: "nilfgaard",
            nameText: "Nilfgaard Empire",
            color: "#FF9100",
            colorText: "#FFC803",
            logo: "url(assets/img/nilfgaard/logoNilfgaard.png",
            bgBack: "url(assets/img/nilfgaard/bgCardNilfgaard.png)",
            bg: "url(assets/img/nilfgaard/backgroundNilfgaard.jpg)"
        },

        monsters: {
            name: "monsters",
            nameText: "Monsters",
            color: "#FF0000",
            colorText: "#FF0000",
            logo: "url(assets/img/monsters/logoMonsters.png",
            bgBack: "url(assets/img/monsters/bgCardMonsters.png)",
            bg: "url(assets/img/monsters/backgroundMonsters.jpg)"
        },

        northernRealms: {
            name: "northernRealms",
            nameText: "Northern Realms",
            color: "#0087ff",
            colorText: "#1EA0FE",
            logo: "url(assets/img/northernRealms/logoNorthernRealms.png",
            bgBack: "url(assets/img/northernRealms/bgCardNorhernRealms.png)",
            bg: "url(assets/img/northernRealms/backgroundNorthernRealms.jpg)"
        },

        scoyataely: {
            name: "scoyataely",
            nameText: "Scoia’taels",
            color: "#008300",
            colorText: "#04C100",
            logo: "url(assets/img/scoyataely/logoScoyataely.png)",
            bgBack: "url(assets/img/monsters/bgCardMonsters.png)",
            bg: "url(assets/img/scoyataely/backgroundScoyataely.jpg)"
        },

        skellige: {
            name: "skellige",
            nameText: "Skellige",
            color: "#9B00FF",
            colorText: "#CD03FF",
            logo: "url(assets/img/skellige/logoSkellige.png",
            bgBack: "url(assets/img/monsters/bgCardMonsters.png)",
            bg: "url(assets/img/skellige/backgroundSkellige.jpg)"
        }
    }

    return dbFraction
}
function dbGamers() {
    const gamers = ["Nikita", "Alice", "Anastasia", "Fedor"]
    return gamers
}

function dbFraction() {
    const fraction = {
        nilfgaard: {
            leaders: {
                liderLordSouth: {
                    name: "liderLordSouth",
                    bg: "url(assets/img/nilfgaard/liderLordSouth.png)",
                    gamers: {
                        Nikita: false,
                        Alice: false,
                        Anastasia: false,
                        Fedor: false
                    }
                },
                liderLordSouth1: {
                    name: "liderLordSouth1",
                    bg: "url(assets/img/nilfgaard/liderLordSouth.png)",
                    gamers: {
                        Nikita: false,
                        Alice: false,
                        Anastasia: false,
                        Fedor: false
                    }
                },
                liderLordSouth2: {
                    name: "liderLordSouth2",
                    bg: "url(assets/img/nilfgaard/liderImperatorNilf.png)",
                    gamers: {
                        Nikita: false,
                        Alice: false,
                        Anastasia: false,
                        Fedor: false
                    }
                },
                liderLordSouth3: {
                    name: "liderLordSouth3",
                    bg: "url(assets/img/nilfgaard/liderImperatorNilf.png)",
                    gamers: {
                        Nikita: false,
                        Alice: false,
                        Anastasia: false,
                        Fedor: false
                    }
                },
                liderLordSouth4: {
                    name: "liderLordSouth4",
                    bg: "url(assets/img/nilfgaard/liderImperatorNilf.png)",
                    gamers: {
                        Nikita: false,
                        Alice: false,
                        Anastasia: false,
                        Fedor: false
                    }
                }
            },

            melee: {
                meleGroupNilf: {
                    name: "meleGroupNilf",
                    bg: "url(assets/img/nilfgaard/meleGroupNilf.png)",
                    gamers: {
                        Nikita: false,
                        Alice: false,
                        Anastasia: false,
                        Fedor: false
                    }
                },
                melenauzick_2_friend: {
                    name: "melenauzick_2_friend",
                    bg: "url(assets/img/nilfgaard/melenauzick_2_friend.png)",
                    gamers: {
                        Nikita: false,
                        Alice: false,
                        Anastasia: false,
                        Fedor: false
                    }
                }
            }
        },
        monsters: {
            leaders: {
                liderEredinBreakkGlass: {
                    name: "liderEredinBreakkGlass",
                    bg: "url(assets/img/monsters/liderEredinBreakkGlass.png)",
                    gamers: {
                        Nikita: false,
                        Alice: false,
                        Anastasia: false,
                        Fedor: false
                    }
                }
            },

            melee: {
                meleGroupNaker_2: {
                    name: "meleGroupNaker_2",
                    bg: "url(assets/img/monsters/meleGroupNaker_2.png)",
                    gamers: {
                        Nikita: false,
                        Alice: false,
                        Anastasia: false,
                        Fedor: false
                    }
                }
            }
        },
        northernRealms: {
            leaders: {
                liderEredinBreakkGlass1: {
                    name: "liderEredinBreakkGlass1",
                    bg: "url(assets/img/monsters/liderEredinBreakkGlass.png)",
                    gamers: {
                        Nikita: false,
                        Alice: false,
                        Anastasia: false,
                        Fedor: false
                    }
                }
            },

            melee: {
                meleGroupNaker_21: {
                    name: "meleGroupNaker_21",
                    bg: "url(assets/img/monsters/meleGroupNaker_2.png)",
                    gamers: {
                        Nikita: false,
                        Alice: false,
                        Anastasia: false,
                        Fedor: false
                    }
                }
            }
        },
        scoyataely: {},
        skellige: {}
    }

    return fraction
}

const filter = new Filter(dbFraction(), dbFractionLocal(), dbGamers())

export { filter }