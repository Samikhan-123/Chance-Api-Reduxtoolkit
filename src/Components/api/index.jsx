import Chance from "chance";

const chance = Chance();

const fakeUserData = () => {
    // console.log(chance.name({ middle: true }))
    const name = chance.name({ middle: true });
    const email = chance.email();

    return { name, email };}

export default fakeUserData;