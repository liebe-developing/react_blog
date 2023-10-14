let options = { year: "numeric", month: "long", day: "numeric" };
let today = new Date().toLocaleDateString("fa-IR", options);

const NAV_ITEMS = [
  {
    label: "خانه",
  },
  {
    label: "سبک زندگی",
    children: [
      {
        label: "مسافرت",
      },
      {
        label: "سلامت",
      },
      {
        label: "غذا",
      },
      {
        label: "مدل",
      },
    ],
  },
  {
    label: "تکنولوژی",
    href: "#",
  },
  {
    label: "کسب و کار",
    href: "#",
  },
];

const RANDOM_POSTS = [
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m2.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m4.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m2.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m4.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m2.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m4.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m2.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m4.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m2.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m4.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m2.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m4.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m2.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m4.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m2.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m4.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m2.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m4.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m2.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m4.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m2.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m4.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m2.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m4.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m2.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m4.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m2.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m4.jpg",
    title: "دستور العمل های خامه ای سیر سالاد مرغ پارمسان",
    category: "غذا",
    createdAt: today,
    creator: [
      {
        avatarUrl:
          "https://rtl-demo-getblog.aryazdh.ir/images/users/user-1.jpg",
        name: "رزمجوئی",
      },
    ],
  },
];

const CATEGORIES = [
  {
    img: "https://rtl-demo-getblog.aryazdh.ir/images/food/m4.jpg",
    title: "غذا",
  },
  {
    img: "https://lafarrerr.com/blog/wp-content/uploads/2022/12/exercise-benefits.jpg",
    title: "ورزش",
  },
  {
    img: "https://www.didnegar.com/wp-content/uploads/2022/04/Untitled-1-min-1.jpg",
    title: "تکنولوژی",
  },
  {
    img: "https://static.independent.co.uk/2023/05/10/12/Ageing%20politicians%20comp.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp",
    title: "سیاست",
  },
  { img: "https://drmehryazdan.com/images/a/7.jpg", title: "کسب و کار" },
  {
    img: "https://www.eligasht.com/Blog/wp-content/uploads/2021/09/traveling-people.jpg",
    title: "سفر",
  },
];

export { NAV_ITEMS, RANDOM_POSTS, CATEGORIES };
