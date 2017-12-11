var color1 = [];

function colorFormation(k) {

    for (var l = 0; l < k.length; l++) {
        if ([k[l]] == 'Open' || k[l] == 'Critical' || k[l] == 'critical' || [k[l]] == 'Target NOT Met' || [k[l]] == 'Bad') {
            color1[l] = colors[0];
        } else if ([k[l]] == 'Pending' || k[l] == 'High' || k[l] == 'high') {
            color1[l] = colors[1];
        } else if ([k[l]] == 'Solved' || k[l] == 'Medium' || k[l] == 'medium' || [k[l]] == 'Responded' || [k[l]] == 'Product Issue') {
            color1[l] = colors[2];
        } else if ([k[l]] == 'Closed' || k[l] == 'Low' || k[l] == 'low' || [k[l]] == 'Target Met' || [k[l]] == 'Good' || [k[l]] == 'Non Product Issue') {
            color1[l] = colors[3];
        } else if ([k[l]] == 'Other') {
            color1[l] = colors[4];
        } else {
            color1[l] = colors[l];
        }
    }
    return color1;
}
