    //jshint esversion:6

    exports.getDate = function() {
        const today = new Date();
        
        // tarihi formatlama
        //https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
        const options = {
            weekday: "long",
            day:"numeric",
            month:"long"
        }
        return today.toLocaleDateString("en-Us",options);
    };

    exports.getDay = function(){
        const today = new Date();
        
        // tarihi formatlama
        //https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
        const options = {
            weekday: "long"
        }
        return today.toLocaleDateString("en-Us",options);
    };




    