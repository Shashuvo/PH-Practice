function cashOut(money) {

    if (money < 0 || typeof money !== 'number') {
        return "Invalid";
    }
    else {
        result = (money * (1.75 / 100));

        return result;
    }
}





function validEmail(email) {
    if (typeof email !== "string") { return "Invalid"; }

    const invalidSymbol = [".", "-", "_", "-", "+", "@"];
    if (invalidSymbol.includes(email[0])) { return false; }

    const symbolCount = email.split("@").length - 1;
    if (symbolCount !== 1) { return false; }

    if (email.includes(" ")) { return false; }

    if (!email.endsWith(".com")) { return false; }

    return true;
}






function electionResult(votes) {
    let mangoCount = 0;
    let bananaCount = 0;
    if (!Array.isArray(votes)) { return "Invalid" };
    for (let i = 0; i < votes.length; i++) {
        if (votes[i] === "mango") {
            mangoCount++;
        } else if (votes[i] === "banana") {
            bananaCount++;
        }
    }
    if (mangoCount > bananaCount) { return "Mango"; }
    else if (bananaCount > mangoCount) { return "Banana"; }
    else { return "Draw"; }
}






function isBestFriend(f1, f2) {
    if (typeof f1 !== "object" || typeof f2 !== "object") {
        return "Invalid";
    }
    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
        return true;
    } else {
        return false;
    }
}






function calculateWatchTime(times) {
    let totalWatchTime = 0;
    let output = {
        hour: 0,
        minute: 0,
        second: 0,
    };

    if (!Array.isArray(times)) {
        return "Invalid";
    }

    for (let time of times) {
        if (typeof time !== "number") {
            return "Invalid";
        }

        totalWatchTime += time;
    }

    output.hour = Math.floor(totalWatchTime / 3600);
    output.minute = Math.floor((totalWatchTime % 3600) / 60);
    output.second = totalWatchTime % 60;

    return output;
}
