/** @format */

const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const responsiveMenuClassName = ref("responsiveMenu-container");
    const responsiveMenuClassNameActive = ref("responsive-Menu--active");
    const methodType = ref('zarinpal')
    const isError = ref(false)
    const PlanToShop = ref({})
    const defaultPlan = ref({
      price:"مطابق با پلن شما",
      time:"اشتراک پرمیوم",
      ex:"مطابق با پلن شما",
      timeToActive: "مطابق با پلن شما",
      planType:'',

    })
    const CurrentPlans = ref([
      {
        time: "سه ماهه",
        month:3,
        timeToActive:" 1 الی 30 دقیقه",
        planType:'threemonth',
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
        timeToActive:" 1 الی 30 دقیقه",
        planType:'sixmonth',

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
        timeToActive:" 1 الی 30 دقیقه",
        planType:'twelvemonth',
        
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
        timeToActive:" 1 الی 5 دقیقه",
        planType:'threemonth',
      
        month:1,
        planType:'onemonth',

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
        timeToActive:" 1 الی 30 دقیقه",
        month:3,
        planType:'threemonth',
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
        planType:'sixmonth',

        timeToActive:" 1 الی 30 دقیقه",

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
        planType:'twelvemonth',
        timeToActive:" 1 الی 30 دقیقه",

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
        timeToActive:" 1 الی 5 دقیقه",
        planType:'threemonth',

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
    const pymentType = (Wrapper,Type,circleClass)=>{
      console.log('clicked')
     
      if(isElementExist('selectPaymentWay__item--active').message == 'ok'){
        removeClass('selectPaymentWay__item--active','selectPaymentWay__item--active')
      }
      if(isElementExist('selectPaymentWay__item-circle--active').message == 'ok'){
        removeClass('selectPaymentWay__item-circle--active','selectPaymentWay__item-circle--active')
      }
      methodType.value = Type
      addClass(Wrapper,'selectPaymentWay__item--active')
      addClass(circleClass,'selectPaymentWay__item-circle--active')
      

    }
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
    function convertNumber(fromNum) {
      var result;
      var arabicMap = {
          '١۲':12,
          '١١':11,
          '١٠': 10,
          '٩': 9,
          '٨': 8,
          '٧': 7,
          '٦': 6,
          '٥': 5,
          '٤': 4,
          '٣': 3,
          '٢': 2,
          '١': 1,
          '٠': 0
      };
      result = arabicMap[fromNum];
      if (result === undefined) {
          result = -1;
      }
      return result;
  }
  
 
    
    const chekcout = (Plan)=>{
    
      PlanToShop.value = Plan
      let defPrice = PlanToShop.value.price
      let ex = Number(PlanToShop.value.month)
      let tim = PlanToShop.value.time
      let activeTie = PlanToShop.value.timeToActive
      let today = new Date().toLocaleDateString('fa-IR');     
      let CurrentDate = today.split('/')[1]
      console.log(convertNumber(CurrentDate))
      let ExYear = today.split('/')[0]
      let ExDay = today.split('/')[2]

      let ExMonth = Number(digitsFaToEn(CurrentDate)) + Number(ex)
      
      if(ExMonth>12){
        ExMonth = ExMonth - 12
        ExYear = Number(digitsFaToEn(ExYear)) + 1
      }
      let ExFinal = `${ExYear}/${ExMonth}/${ExDay}`
      console.log(methodType)
      defaultPlan.value = {
        price:Number(defPrice).toLocaleString(),
  time:`   اشتراک پرمیوم  ${tim}`,
  ex:` از ${digitsEnToFa(today)} تا ${digitsEnToFa(ExFinal)}`,
  timeToActive: `
 
  ${PlanToShop.value.timeToActive}
  `,
  planType:PlanToShop.value.planType

      }
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

      document.querySelectorAll(`.selectPaymentWay__item`).forEach(i=>{
        i.addEventListener('click',()=>{
          if(isElementExist('selectPaymentWay__item--active').message == 'ok'){
            removeClass('selectPaymentWay__item--active','selectPaymentWay__item--active')
          }
          i.classList.add('selectPaymentWay__item--active')
          methodType.value = i.getAttribute('priceType')
          console.log(PlanToShop.value.price)
         
        })
      })
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
    const HandlePay = async ()=>{
        let cellPhone = document.querySelector('.cellphone').value
        let username = document.querySelector('.username').value
        let paymentMethod = methodType.value
        let PlanType = PlanToShop.value.planType
        console.log(PlanType,paymentMethod,username,cellPhone)
        console.log('waite . . .')
        axios.get(`https://bothosts.org/apiv2/index.php?key=xxxxxxx&username=${username}&phone_number=${cellPhone}&payment_method=${paymentMethod}&pla
         n=${PlanType}`,{
          headers: {"Access-Control-Allow-Origin": "*"}
         }).then(data=>{
          console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
       
    }
    const closeNotif = ()=>{
      isError.value = false
    }
   function getlog (){
    console.log('cliedk')
   }
    // return values
    return {
      HandlePay,
      closeNotif,
      isError,
      getlog,
      onOpenMenu,
      onCloseMenu,
      addClass,
      removeClass,
      isElementExist,
      pymentType,
      Plans,
      chekcout,
      handlePlanType,
      CurrentPlans,
      defaultPlan,
      PlanToShop
     
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
