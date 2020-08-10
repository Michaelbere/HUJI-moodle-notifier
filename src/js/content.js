var xhrList = window.performance.getEntriesByType("resource").filter(a => a.initiatorType == "xmlhttprequest");

function ListIsOk(list) {
    return list.filter(a => a.name.includes("service.php?sesskey=")).length > 0;
}

function retrieveSessKey(list) {
    requestName = list.filter(a => a.name.includes("service.php?sesskey="))[0].name;
    startIndex = requestName.indexOf("service.php?sesskey=") + "service.php?sesskey=".length;
    endIndex = startIndex + 10;
    sessKey = requestName.substring(startIndex, endIndex);
    return sessKey;
}

function wait() {
    if (!ListIsOk(xhrList)) {
        xhrList = window.performance.getEntriesByType("resource").filter(a => a.initiatorType == "xmlhttprequest");
        setTimeout(wait, 100);
    } else {
        console.log(xhrList);
        sessKey = retrieveSessKey(xhrList);
        console.log(sessKey);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', `https://moodle2.cs.huji.ac.il/nu19/lib/ajax/service.php?sesskey=${sessKey}&info=core_calendar_get_action_events_by_timesort`);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            if (xhr.status === 200) {
                let eventData = JSON.parse(xhr.responseText)[0].data;
                handleEventData(eventData)
            }
        };
        xhr.send(JSON.stringify([{
            index: 0,
            methodname: 'core_calendar_get_action_events_by_timesort',
            args: {
                limitnum: 20,
                limittononsuspendedevents: true,
            }
        }]));
    }
}

function handleEventData(eventData) {
    console.log(eventData);
}

wait();
