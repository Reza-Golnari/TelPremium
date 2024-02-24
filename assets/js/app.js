/** @format */

const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const responsiveMenuClassName = ref("responsiveMenu-container");
    const responsiveMenuClassNameActive = ref("responsive-Menu--active");
    const CurrentPlans = ref([
      {
        time: "سه ماهه",
        month:3,
        price: "870000",
        options: [
          { Text: "بدون نیاز به لاگین در اکانت شما", active: true },
          { Text: "فعال سازی روی اکانت شخصی", active: true },

          

          {
            Text: `
          قابل تمدید و کاملا قانونی

`,
            active: true,
          },

          {
            Text: `
          چهار بوست هدیه

`,
            active: true,
          },

          {
            Text: `
          کاملا امن و تضمین شده
`,
            active: true,
          },

          {
            Text: `
          تحویل سریع بین 1 الی 30 دقیقه

`,
            active: true,
          },
          {
            Text: `

          فعالسازی روی شماره ایران و غیر ایران



`,
            active: true,
          },
        ],
      },
      {
        time: "شش ماه",
        month:6,
        price: "1270000",
        options: [
          { Text: "بدون نیاز به لاگین در اکانت شما", active: true },
        
          { Text: "فعال سازی روی اکانت شخصی", active: true },

          {
            Text: `
          قابل تمدید و کاملا قانونی

`,
            active: true,
          },

          {
            Text: `
          چهار بوست هدیه

`,
            active: true,
          },

          {
            Text: `
          کاملا امن و تضمین شده
`,
            active: true,
          },

          {
            Text: `
          تحویل سریع بین 1 الی 30 دقیقه

`,
            active: true,
          },
          {
            Text: `

          فعالسازی روی شماره ایران و غیر ایران



`,
            active: true,
          },
        ],
      },
      {
        time: "یک ساله",
        price: "1950000",
        month:12,
        options: [
          { Text: "بدون نیاز به لاگین در اکانت شما", active: true },
          { Text: "فعال سازی روی اکانت شخصی", active: true },
        

          {
            Text: `
          قابل تمدید و کاملا قانونی

`,
            active: true,
          },

          {
            Text: `
          چهار بوست هدیه

`,
            active: true,
          },

          {
            Text: `
          کاملا امن و تضمین شده
`,
            active: true,
          },

          {
            Text: `
          تحویل سریع بین 1 الی 30 دقیقه

`,
            active: true,
          },
          {
            Text: `

          فعالسازی روی شماره ایران و غیر ایران



`,
            active: true,
          },
        ],
      },
      {
        time: "یک ماهه",
        price: "300000",
        month:1,

        options: [
          { Text: "نیاز به لاگین در اکانت شما", active: false },
         
          { Text: "فعال سازی روی اکانت شخصی", active: true },
        
          {
            Text: `
          قابل تمدید و کاملا قانونی

`,
            active: true,
          },

          {
            Text: `
          چهار بوست هدیه

`,
            active: true,
          },

          {
            Text: `
          کاملا امن و تضمین شده
`,
            active: true,
          },

          {
            Text: `
          تحویل سریع بین 1 الی 30 دقیقه

`,
            active: true,
          },
          {
            Text: `

          فعالسازی روی شماره ایران و غیر ایران



`,
            active: true,
          },
        ],
      },
    ])
    const Plans = ref([
      {
        time: "سه ماهه",
        month:3,
        price: "870000",
        options: [
          { Text: "بدون نیاز به لاگین در اکانت شما", active: true },
          { Text: "فعال سازی روی اکانت شخصی", active: true },

          {
            Text: `
          قابل تمدید و کاملا قانونی

`,
            active: true,
          },

          {
            Text: `
          چهار بوست هدیه

`,
            active: true,
          },

          {
            Text: `
          کاملا امن و تضمین شده
`,
            active: true,
          },

          {
            Text: `
          تحویل سریع بین 1 الی 30 دقیقه

`,
            active: true,
          },
          {
            Text: `

          فعالسازی روی شماره ایران و غیر ایران



`,
            active: true,
          },
        ],
      },
      {
        time: "شش ماه",
        month:6,
        price: "1270000",
        options: [
          { Text: "بدون نیاز به لاگین در اکانت شما", active: true },
       
          { Text: "فعال سازی روی اکانت شخصی", active: true },

          {
            Text: `
          قابل تمدید و کاملا قانونی

`,
            active: true,
          },

          {
            Text: `
          چهار بوست هدیه

`,
            active: true,
          },

          {
            Text: `
          کاملا امن و تضمین شده
`,
            active: true,
          },

          {
            Text: `
          تحویل سریع بین 1 الی 30 دقیقه

`,
            active: true,
          },
          {
            Text: `

          فعالسازی روی شماره ایران و غیر ایران



`,
            active: true,
          },
        ],
      },
      {
        time: "یک ساله",
        price: "1950000",
        month:12,
        options: [
          { Text: "بدون نیاز به لاگین در اکانت شما", active: true },
        
          { Text: "فعال سازی روی اکانت شخصی", active: true },
          {
            Text: `
          قابل تمدید و کاملا قانونی

`,
            active: true,
          },

          {
            Text: `
          چهار بوست هدیه

`,
            active: true,
          },

          {
            Text: `
          کاملا امن و تضمین شده
`,
            active: true,
          },

          {
            Text: `
          تحویل سریع بین 1 الی 30 دقیقه

`,
            active: true,
          },
          {
            Text: `

          فعالسازی روی شماره ایران و غیر ایران



`,
            active: true,
          },
        ],
      },
      {
        time: "یک ماهه",
        price: "300000",
        month:1,

        options: [
          { Text: "نیاز به لاگین در اکانت شما", active: false },
          { Text: "فعال سازی روی اکانت شخصی", active: true },

         

          {
            Text: `
          قابل تمدید و کاملا قانونی

`,
            active: true,
          },

          {
            Text: `
          چهار بوست هدیه

`,
            active: true,
          },

          {
            Text: `
          کاملا امن و تضمین شده
`,
            active: true,
          },

          {
            Text: `
          تحویل سریع بین 1 الی 30 دقیقه

`,
            active: true,
          },
          {
            Text: `

          فعالسازی روی شماره ایران و غیر ایران



`,
            active: true,
          },
        ],
      },
    ]);
    const OneMont = ref ([
      {
        time: "یک ماهه",
        price: "300000",
        options: [
          { Text: "نیاز به لاگین در اکانت شما", active: false },
          { Text: "فعال سازی روی اکانت شخصی", active: true },

          { Text: "بدون نیاز به لاگین در اکانت شما", active: true },

          {
            Text: `
          قابل تمدید و کاملا قانونی

`,
            active: true,
          },

          {
            Text: `
          چهار بوست هدیه

`,
            active: true,
          },

          {
            Text: `
          کاملا امن و تضمین شده
`,
            active: true,
          },

          {
            Text: `
          تحویل سریع بین 1 الی 30 دقیقه

`,
            active: true,
          },
          {
            Text: `

          فعالسازی روی شماره ایران و غیر ایران



`,
            active: true,
          },
        ],
      },
    ])
    const ThreeMonth = ref(
      {
      
        time: "سه ماهه",
        price: "870000",
        options: [
          { Text: "بدون نیاز به لاگین در اکانت شما", active: true },
          { Text: "فعال سازی روی اکانت شخصی", active: true },

          { Text: "بدون نیاز به لاگین در اکانت شما", active: true },

          {
            Text: `
          قابل تمدید و کاملا قانونی

`,
            active: true,
          },

          {
            Text: `
          چهار بوست هدیه

`,
            active: true,
          },

          {
            Text: `
          کاملا امن و تضمین شده
`,
            active: true,
          },

          {
            Text: `
          تحویل سریع بین 1 الی 30 دقیقه

`,
            active: true,
          },
          {
            Text: `

          فعالسازی روی شماره ایران و غیر ایران



`,
            active: true,
          },
        ],
      },
    )
    const SixsMonth = ref([
      {
        time: "شش ماه",
        price: "1270000",
        options: [
          { Text: "بدون نیاز به لاگین در اکانت شما", active: true },
          { Text: "فعال سازی روی اکانت شخصی", active: true },

        

          {
            Text: `
          قابل تمدید و کاملا قانونی

`,
            active: true,
          },

          {
            Text: `
          چهار بوست هدیه

`,
            active: true,
          },

          {
            Text: `
          کاملا امن و تضمین شده
`,
            active: true,
          },

          {
            Text: `
          تحویل سریع بین 1 الی 30 دقیقه

`,
            active: true,
          },
          {
            Text: `

          فعالسازی روی شماره ایران و غیر ایران



`,
            active: true,
          },
        ],
      },
    ])
    const OneYears = ref([
      {
        time: "یک ساله",
        price: 1950000,
        options: [
          { Text: "بدون نیاز به لاگین در اکانت شما", active: true },
          { Text: "فعال سازی روی اکانت شخصی", active: true },

         
          {
            Text: `
          قابل تمدید و کاملا قانونی

`,
            active: true,
          },

          {
            Text: `
          چهار بوست هدیه

`,
            active: true,
          },

          {
            Text: `
          کاملا امن و تضمین شده
`,
            active: true,
          },

          {
            Text: `
          تحویل سریع بین 1 الی 30 دقیقه

`,
            active: true,
          },
          {
            Text: `

          فعالسازی روی شماره ایران و غیر ایران



`,
            active: true,
          },
        ],
      },
    ])
    const selectPlanNumberClass = ref(
      "seclecPlan-titleWRapper__leftContent-item"
    );
    const selectPlanNumberClassActive = ref(
      "seclecPlan-titleWRapper__leftContent-item--active"
    );
    const ToLocaleStringNumbers = (className) => {
      selectAll(`.${className}`).forEach((el) => {
        let number = Number(el.innerHTML);
        el.innerHTML = number.toLocaleString();
      });
    };
    const selectAll = (className) => {
      return document.querySelectorAll(className);
    };
    const isElementExist = (
      className,
      options = {
        isArray: false,
      }
    ) => {
      if (options.isArray) {
        if (document.querySelectorAll(`.${className}`)) {
          return { message: "ok" };
        } else {
          return { message: "no" };
        }
      } else {
        if (document.querySelector(`.${className}`)) {
          return { message: "ok" };
        } else {
          return { message: "no" };
        }
      }
    };
    const removeClass = (target, classTarget) => {
      if (isElementExist(`${target}`).message == "ok") {
        document.querySelector(`.${target}`).classList.remove(`${classTarget}`);
      }
    };
    const addClass = (target, classTarget) => {
      if (isElementExist(`.${target}`)) {
        document.querySelector(`.${target}`).classList.add(`${classTarget}`);
      }
    };
    const addClassWithElement = (element, classTarget) => {
      element.classList.add(`${classTarget}`);
    };
    const onOpenMenu = () => {
      document
        .querySelector(`.${responsiveMenuClassName.value}`)
        .classList.toggle(responsiveMenuClassNameActive.value);
    };
    const onCloseMenu = (e) => {
      console.log("clicked on remove");
      document
        .querySelector(`.${responsiveMenuClassName.value}`)
        .classList.remove(responsiveMenuClassNameActive.value);
    };

    function setBoxHeight(el) {
      const height = el.scrollHeight.toString() + "px";
      if (el.classList.contains("question-box--active"))
        el.style.height = height;
      else
        el.style.height =
          el.querySelector(".question-title").scrollHeight + 10 + "px";
    }
    const handlePlanType = (type)=>{
      console.log(type)
      if(type == 10){
        CurrentPlans.value = Plans.value
        console.log(CurrentPlans)
      }else{
        let newArray = Plans.value.filter((item)=>{
          return item.month === type
         })
         console.log(newArray)
         

          CurrentPlans.value = newArray
        console.log(CurrentPlans.value,"current Plabs")

      }
      // ToLocaleStringNumbers("seclecPlan-box__priceBox-text");
     
    }
    onMounted(() => {
      document
        .querySelectorAll(`.${selectPlanNumberClass.value}`)
        .forEach((item) => {
          item.addEventListener("click", (PriceType) => {
            if (
              isElementExist(selectPlanNumberClassActive.value).message == "ok"
            ) {
              console.log(
                selectPlanNumberClassActive.value,
                selectPlanNumberClassActive.value
              );
              removeClass(
                selectPlanNumberClassActive.value,
                selectPlanNumberClassActive.value
              );
            }
            addClassWithElement(item, selectPlanNumberClassActive.value);
          });
        });

      function questionBoxHandler() {
        document.querySelectorAll(".question-box").forEach((box) => {
          box.style.height =
            box.querySelector(".question-title").scrollHeight + 10 + "px";
          box.removeEventListener("click", boxHandler);
          box.addEventListener("click", boxHandler);
        });
      }
      questionBoxHandler();

      function boxHandler() {
        if (
          document.querySelector(".question-box--active") &&
          !this.classList.contains("question-box--active")
        ) {
          console.log(
            document.querySelector(".question-box--active .question-title")
              .scrollHeight
          );
          document.querySelector(".question-box--active").style.height =
            document.querySelector(".question-box--active .question-title")
              .scrollHeight +
            10 +
            "px";
          document
            .querySelector(".question-box--active")
            .classList.remove("question-box--active");
        }

        this.classList.toggle("question-box--active");
        setBoxHeight(this);
      }

      window.addEventListener("resize", questionBoxHandler);

      if (
        isElementExist("seclecPlan-box__priceBox-text", {
          isArray: true,
        }).message == "ok"
      ) {
      }
    });
    // return values
    return {
      onOpenMenu,
      onCloseMenu,
      addClass,
      removeClass,
      isElementExist,
      Plans,
      OneMont,
      OneYears,
      ThreeMonth,
      SixsMonth,
      handlePlanType,
      CurrentPlans
    };
  },
}).mount("#app");

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
