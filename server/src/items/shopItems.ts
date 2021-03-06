import { ItemFactory } from "../../../../../server/systems/item";
import effects from "../../../../../shared/enums/effects";
import { ITEM_TYPE } from "../../../../../shared/enums/itemTypes";
import { Item } from "../../../../../shared/interfaces/item";

// Stuff to eat
const hotdog: Item = {
    name: 'Hotdog',
    description: 'Feeling hungry?',
    icon: 'crate',
    quantity: 1,
    behavior: ITEM_TYPE.CAN_TRADE | ITEM_TYPE.CAN_STACK | ITEM_TYPE.CAN_DROP | ITEM_TYPE.CONSUMABLE,
    data: {
        amount: 25,
        event: effects.EFFECT_FOOD,
        sound: 'item_eat',
    },
    dbName: 'Shophotdog',
    version: 2,
};
await ItemFactory.add(hotdog);
await ItemFactory.update(hotdog.dbName, hotdog);

// Stuff to drink
const water: Item = {
    name: 'Waterbottle',
    description: 'Feeling thirsty?',
    icon: 'crate',
    quantity: 0,
    behavior: ITEM_TYPE.CAN_TRADE | ITEM_TYPE.CAN_STACK | ITEM_TYPE.CAN_DROP | ITEM_TYPE.CONSUMABLE,
    data: {
        amount: 25,
        event: effects.EFFECT_WATER,
        sound: 'item_eat',
    },
    dbName: 'Shopwater',
    version: 2,
};
await ItemFactory.add(water);
await ItemFactory.update(water.dbName, water);

const energyDrink: Item = {
    name: 'Energy Drink',
    description: 'Feeling thirsty?',
    icon: 'crate',
    quantity: 0,
    behavior: ITEM_TYPE.CAN_TRADE | ITEM_TYPE.CAN_STACK | ITEM_TYPE.CAN_DROP | ITEM_TYPE.CONSUMABLE,
    data: {
        amount: 10,
        event: effects.EFFECT_WATER,
        sound: 'item_eat',
    },
    dbName: 'Shopenergy',
    version: 2,
};
await ItemFactory.add(energyDrink);
await ItemFactory.update(energyDrink.dbName, energyDrink);

const cola: Item = {
    name: 'Cola',
    description: 'Feeling thirsty?',
    icon: 'crate',
    quantity: 0,
    behavior: ITEM_TYPE.CAN_TRADE | ITEM_TYPE.CAN_STACK | ITEM_TYPE.CAN_DROP | ITEM_TYPE.CONSUMABLE,
    data: {
        amount: 5,
        event: effects.EFFECT_WATER,
        sound: 'item_eat',
    },
    dbName: 'Shopcola',
    version: 2,
};
await ItemFactory.add(cola);
await ItemFactory.update(cola.dbName, cola);
