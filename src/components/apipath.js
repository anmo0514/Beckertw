const backend = 'http://localhost:3700/';
const admin = backend + 'admin/';
const art = backend + 'art/';
const consult = backend + 'consult/';
const course = backend + 'course/';
const discount = backend + 'discount/';
const login = backend + 'login/';
const logout = backend + 'logout/';
const member = backend + 'member/';
const member_page = (page, rows) => {return `${member}p/${page}/${rows}`;}
const member_count =  `${member}count`;
const mou = backend + 'mou/';
const news = backend + 'news/';
const order = backend + 'order/';
const partner = backend + 'partner/';
const product = backend + 'product/';
const qa = backend + 'qa/';
const teacher = backend + 'teacher/';

const frontend = 'http://localhost:3000/'


module.exports = {
    backend,
    admin,
    art,
    consult,
    course,
    discount,
    login,
    logout,
    member,
    member_page,
    member_count,
    mou,
    news,
    order,
    partner,
    product,
    qa,
    teacher,
}