; (function () {
    setInterval(() => {
        let participants = getParticipants(["Participants", "Deelnemers"]);
        if (participants) {
            let items = participants.querySelectorAll('[role="listitem"]');
            let user_name = null;
            let user_ind = null;
            for (let i = 0; i < items.length; i++) {
                let cur_item = items[i];
                let cur_name = cur_item.getElementsByTagName("span")[0].innerHTML;
                let span_elements = cur_item.getElementsByTagName("span");
                if (span_elements.length > 1) {
                    // The second <span> contains "(You)", but in different languages
                    user_name = cur_name;
                    user_ind = i;
                    break;
                }
            }

            if (user_ind != null) {
                let new_user_ind = -1;
                for (let i = 0; i < items.length; i++) {
                    let cur_item = items[i];
                    let cur_name = cur_item.getElementsByTagName("span")[0].innerHTML;

                    if (cur_name.localeCompare(user_name) === 1) {
                        new_user_ind = i;
                        break;
                    }
                }
                if (new_user_ind === -1) {
                    participants.appendChild(participants.children[user_ind]);
                } else {
                    participants.insertBefore(participants.children[user_ind], participants.children[new_user_ind]);
                }
            }
        }

        function getParticipants(possible_names) {
            let participants = null;

            // Try to find the participants list by its aria-label
            for (let i = 0; i < possible_names.length; i++) {
                participants = document.querySelector('[aria-label="' + possible_names[i] + '"]');
                if (participants != null) {
                    break;
                }
            }

            // Fall back to the first element with class "GvcuGe" if no participants list is found
            if (participants == null) {
                participants = document.getElementsByClassName("GvcuGe")[0];
            }
            return participants;
        }
    }, 500)
})()
