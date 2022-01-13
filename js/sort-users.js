;(function () {
    setInterval(() => {
        let participants = document.querySelector('[aria-label="Participants"]')
        if (participants == null) {
            participants = document.querySelector('[class="GvcuGe"]');
        }
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
    }, 500)
})()
