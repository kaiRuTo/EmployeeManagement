const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(email));
    return re.test(email);
}

const validatePhoneNumber = (phone) => {
    console.log('validate phone number: ', phone);
    var re = /(([0|+84]|0[3|2|6|8|9|7])+([0-9]{9}))|([0-9]{9})\b/
    console.log(re.test(phone) && String(phone).length <= 13);
    if (String(phone).charAt(0) == '0') {
        return re.test(phone) && String(phone).length <= 10;
    } else if (String(phone).charAt(0) == '8' && String(phone).charAt(1) == '4') {
        return re.test(phone) && String(phone).length <= 12;
    } else if (String(phone).charAt(0) == '+') {
        return re.test(phone) && String(phone).length <= 13;
    } else {
        return re.test(phone) && String(phone).length <= 9;
    }
}

const validateYoB = (yob) => {
    var toyear = Number(new Date().getFullYear());
    return Number(yob) <= toyear && Number(yob) >= (toyear - 130)
}

const validateNumber = (name) => {
    var re = /^[0-9.,]*$/
    console.log(re.test(name));
    return re.test(name) && String(name).length >= 1;
}

const validateName = (name) => {
    var re = /^[a-zA-Z 'áàảãạâấầẩẫậăắằẳẵặđíìỉĩịóòỏõọơớờởỡợôốồổỗộéèẻẽẹêếềểễệúùủũụưứừửữựýỳỷỹỵÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶĐÍÌỈĨỊÓÒỎÕỌƠỚỜỞỠỢÔỐỒỔỖỘGGÉÈẺẼẸÊẾỀỂỄỆÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ]*$/
    console.log(re.test(name));
    return re.test(name) && String(name).length >= 1;
}

const validateIdentification = (identification) => {
    console.log('validate identification number: ', identification)
    var re = identification.length
    console.log();

    return re == 9 || re == 12
}

const confirmPassword = (password, confirm) => {
    console.log('confirm password: ', password, confirm)
    return password == confirm
}

const validateSpecialKey = (text) => {
    var re = /(([^<>()\[\]\\!.,;:@#$%^&*\_\-=+\s"]+(\[^<>()\[\]\\!.,;:@#$%^&*\_\-=+\s"]+)*)|(".+"))/;
    console.log(re.test(text));
    return re.test(text);
}

const validateLimituserName = (text) => {
    // var re = text.length
    // console.log(re >= 6 || re <= 32);
    // return re >= 6 || re <= 32;
    var re = /^(?=.{4,32}$)(?!.*__.*)(?!.*\.\..*)[a-z0-9_.]+$/
    // var re =/^(?=.{6,32}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
    return re.test(text);
}

const convertVietNamPhoneNumber = (phone) => {
    return `${String(phone).replace(/0/, '0')}`
}

const convertPriceToFloat = (price) => {
    return Number(String(price).includes(',') ? price.split(',').join('') : price)
}

export {
    validateEmail,
    validatePhoneNumber,
    validateIdentification,
    confirmPassword,
    validateSpecialKey,
    validateLimituserName,
    convertVietNamPhoneNumber,
    validateName,
    convertPriceToFloat,
    validateYoB,
    validateNumber
}