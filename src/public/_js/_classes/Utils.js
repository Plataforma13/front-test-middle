class Utils {
    static getMonthName(month) {
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        return months[month];
    }

    static formatDate(date) {
        return ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate()) + ' ' + Utils.getMonthName(date.getMonth());
    }
}