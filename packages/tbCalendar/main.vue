<!--
 * @Author: your name
 * @Date: 2021-05-06 13:16:23
 * @LastEditTime: 2021-07-04 13:18:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/packages/tbCalendar/main.vue
-->
<template>
  <div class="cc-calendar">
    <calendarHeader :headOptions="headOptions" @handlePrevMonth="handlePrevMonth" @handleNextMonth="handleNextMonth" @handleToday="handleToday" />
    <ul class="calendar-week clear">
      <li v-for="(item, index) in calendarTitleArr" :key="index" class="week-item">{{ item }}</li>
    </ul>
    <ul class="calendar-view clear">
      <li v-for="(item, index) in visibleCalendar" :key="index" class="date-view" :class="[{ 'month-class': !isCurrentMonth(item.date) }, { todayBg: isCurrentDay(item.date) }, { handleDay: item.clickDay }]" @click="handleClickDay(item)">
        <span class="date-day" :style="dayStyle" :class="[{ 'opacity-class': !isCurrentMonth(item.date) }]">
          {{ item.day }}
        </span>
        <span class="calendar-num">
          {{ item.calendarNum }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import "./reset.min.css";
import calendarHeader from "./canlendar-head.vue";
import * as utils from "./utils.js";

export default {
  name: "tbCalendar",
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          type: "combination", // 是否为特定的组合方式  header头默认设置样式
          // 如果不是特定的组合方式   那么下方的todayBtn、checkBtn样式就会起作用 两者最好不要一起使用
          headStyle: {
            todayBtn: "left",
            combination: "center",
            checkBtn: "left",
          },
          // 文本对齐位置
          viewStyle: {
            // 视图day天数  文本对齐位置
            day: "right",
          },
        };
      },
    },
  },
  components: {
    calendarHeader,
  },
  data() {
    let { year, month, day } = utils.getNewDate(new Date());
    return {
      headOptions: {
        type: this.options.type,
        style: this.options.headStyle,
        date: "",
        month: "",
      },
      calendarTitleArr: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN "],
      time: { year, month, day },
      calendarList: [],
    };
  },
  computed: {
    dayStyle: function() {
      return {
        textAlign: this.options.viewStyle.day,
      };
    },
    visibleCalendar() {
      const vm = this;
      let calendatArr = [];
      let { year, month } = utils.getNewDate(utils.getDate(this.time.year, this.time.month, 1));

      let currentFirstDay = utils.getDate(year, month, 1);

      // 获取当前月第一天星期几
      let weekDay = currentFirstDay.getDay();
      let startTime = weekDay == 0 ? currentFirstDay - (weekDay + 6) * 24 * 60 * 60 * 1000 : currentFirstDay - (weekDay - 1) * 24 * 60 * 60 * 1000;
      let monthDayNum;
      if (weekDay == 5 || weekDay == 6 || weekDay == 0) {
        monthDayNum = 42;
      } else {
        monthDayNum = 35;
      }

      for (let i = 0; i < monthDayNum; i++) {
        calendatArr.push({
          date: new Date(startTime + i * 24 * 60 * 60 * 1000),
          year: new Date(startTime + i * 24 * 60 * 60 * 1000).getFullYear(),
          month: new Date(startTime + i * 24 * 60 * 60 * 1000).getMonth() + 1,
          day: new Date(startTime + i * 24 * 60 * 60 * 1000).getDate(),
          clickDay: false,
        });
      }
      vm.headOptions.date = `${utils.englishMonth(month)} ${year}`;
      vm.headOptions.month = month;
      return calendatArr;
    },
  },
  methods: {
    // 是否是当前月
    isCurrentMonth(date) {
      // 此处的date 是相当于时间
      let { year: currentYear, month: currentMonth } = utils.getNewDate(utils.getDate(this.time.year, this.time.month, 1));
      let { year, month } = utils.getNewDate(date);
      return currentYear == year && currentMonth == month;
    },
    // 是否是今天
    isCurrentDay(date) {
      let { year: currentYear, month: currentMonth, day: currentDay } = utils.getNewDate(new Date());
      let { year, month, day } = utils.getNewDate(date);
      return currentYear == year && currentMonth == month && currentDay == day;
    },
    // 上一个月
    handlePrevMonth() {
      let prevMonth = utils.getDate(this.time.year, this.time.month, 1);
      prevMonth.setMonth(prevMonth.getMonth() - 1);
      this.time = utils.getNewDate(prevMonth);
      this.headOptions.date = `${utils.englishMonth(this.time.month)} ${this.time.year}`;
      this.headOptions.month = this.time.month;
      const time = { ...this.time };
      time.month++;
      this.$emit("handlePrevMonth", time);
      this.calendarList = this.visibleCalendar;
    },
    // 下一个月
    handleNextMonth() {
      let nextMonth = utils.getDate(this.time.year, this.time.month, 1);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      this.time = utils.getNewDate(nextMonth);
      this.headOptions.date = `${utils.englishMonth(this.time.month)} ${this.time.year}`;
      this.headOptions.month = this.time.month;
      const time = { ...this.time };
      time.month++;
      this.$emit("handleNextMonth", time);
      this.calendarList = this.visibleCalendar;
    },
    // 点击回到今天
    handleToday() {
      this.time = utils.getNewDate(new Date());
      this.time.clickDay = true;
      this.time.date = new Date();
      this.calendarList = this.visibleCalendar;
      this.handleClickDay(this.time, true);
      this.$emit("handleToday");
    },
    // 点击某一天
    handleClickDay(item, newDate) {
      if (!newDate) {
        // 获取view视图所处的当前月份
        let month = this.headOptions.month;
        month += 1;
        // 判断点击的是不是年初去往上一年
        if (month == 12 && item.month == 1) {
          // 跳转到下一个月
          this.handleNextMonth();
        } else if (month == 1 && item.month == 12) {
          // 跳转到上一个月
          this.handlePrevMonth();
        } else if (month < item.month) {
          // 跳转到下一个月
          this.handleNextMonth();
        } else if (month > item.month) {
          // 跳转到上一个月
          this.handlePrevMonth();
        }
        this.$emit("handleClickDay", item);
        this.calendarList.map((x) => {
          x.clickDay = false;
        });
      }
      // 如果是点击的今天的话会触发下面的事件
      if (newDate) {
        this.calendarList.map((x) => {
          if (x.year == item.year && x.month == item.month + 1 && x.day == item.day) {
            x.clickDay = true;
          }
        });
      } else {
        // 如果不是相当于点击的日历所以会根据寻找内存的方式将颜色变成蓝色
        // this.$set(item, "clickDay", true);
        this.calendarList.map((x) => {
          if (x.year == item.year && x.month == item.month && x.day == item.day) {
            x.clickDay = true;
          }
        });
      }
    },
  },
  created() {
    this.calendarList = this.visibleCalendar;
    this.calendarType = this.options.calendarType;
  },
};
</script>

<style lang="less">
.cc-calendar {
  padding: 23px 30px 30px;
  width: 100%;
  height: 100%;
  background: #f9fafc;
  box-sizing: border-box;
  .calendar-week {
    width: 100%;
    height: 46px;
    line-height: 46px;
    border: 1px solid #e4e7ea;
    border-right: none;
    .week-item {
      float: left;
      width: 14.285%;
      text-align: center;
      font-size: 14px;
      color: #424953;
      border-right: 1px solid #e4e7ea;
      font-weight: 600;
    }
  }
  .calendar-view {
    width: 100%;
    border-left: 1px solid #e4e7ea;
    .date-view {
      float: left;
      width: 14.285%;
      height: 120px;
      border-right: 1px solid #e4e7ea;
      border-bottom: 1px solid #e4e7ea;
      cursor: pointer;
      .date-day {
        padding: 8px 8px 0;
        display: block;
        width: 100%;
        font-size: 14px;
        color: #7f8794;
      }
      .calendar-num {
        margin-top: 6px;
        display: block;
        width: 100%;
        text-align: center;
        font-size: 30px;
        color: #424953;
      }
    }
    .opacity-class {
      opacity: 0.5;
    }
    .month-class {
      background-image: linear-gradient(45deg, rgba(000, 000, 000, 0.03) 25%, transparent 25%, transparent 50%, rgba(000, 000, 000, 0.03) 50%, rgba(000, 000, 000, 0.03) 75%, transparent 75%, transparent);
      background-size: 20px 20px;
    }
    .todayBg {
      background: #fffdef;
    }
    .handleDay {
      background: #2061ff !important;
      .date-day {
        color: #bccfff !important;
      }
      .calendar-num {
        color: #fff !important;
      }
    }
  }
}
</style>
