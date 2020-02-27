module.exports = function createDreamTeam(members) {
    let team = [];

    if (!Array.isArray(members)) {
        return false;
    }
    for (let i = 0; i < members.length; i++) {

        if (typeof members[i] === "string") {

            let str = members[i].trim().toUpperCase();
            team.push(str[0]);
        }
    }
    return team.sort().join('');
}