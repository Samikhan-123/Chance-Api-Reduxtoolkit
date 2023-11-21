import Chance from "chance";

const chance = Chance();

const fakeUserData = () => {
    // console.log(chance.name({ middle: true }))
    const name = chance.name({ middle: true });
    const email = chance.email();
    const gender = chance.gender();


    return { name, email,gender };}

export default fakeUserData;