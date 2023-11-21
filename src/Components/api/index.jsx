import Chance from "chance";

const chance = Chance();

const fakeUserData = () => {
    // console.log(chance.name({ middle: true }))
    const first = chance.first();
    const email = chance.email();
    const gender = chance.gender();
    
    return { first, email, gender };
}

export default fakeUserData;