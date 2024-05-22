
// function insertVideo() {
//     const wrapper = document.querySelector('.banner-brand__wrapper');
//     console.log(wrapper,1);
//     if (!wrapper) return;

//     const video = document.createElement('video');
//     video.setAttribute('autoplay', '');
//     video.setAttribute('muted', '');
//     video.setAttribute('loop', '');
//     video.style.width = '100%';
//     video.style.height = '100%';

//     const source = document.createElement('source');
//     source.src = 'http://wisdomhallsup.oss-cn-beijing.aliyuncs.com/798.mp4';
//     source.type = 'video/mp4';

//     video.appendChild(source);
//     wrapper.appendChild(video);

//     // Attempt to play the video
//     video.play().catch(error => console.error("Video play failed:", error));
// }

// document.addEventListener('DOMContentLoaded', insertVideo);

// const wrapper = document.querySelector(".home-wrapper");
// const Div = document.getElementsByTagName("section")[0];
// // const Div = document.createElement("section");
// // Div.style.width = "100%";
// // Div.style.height = "100%";

// const Video = document.createElement("video");
// // wrapper.replaceChild(Video, Div)
// Video.src = "http://wisdomhallsup.oss-cn-beijing.aliyuncs.com/798.mp4";
// Video.setAttribute("autoplay", "");
// // Video.setAttribute("class", "");
// Video.setAttribute("muted", "");
// Video.setAttribute("loop", "");
// Video.style.width = "100%";
// Video.style.height = "100%";

// // const Source = document.createElement("source");
// // Source.src = "http://wisdomhallsup.oss-cn-beijing.aliyuncs.com/798.mp4";
// // Source.type = "video/mp4";

// // Video.appendChild(Source);
// // Div.appendChild(Video);
// // wrapper.appendChild(Video);

// // 获取 .home-wrapper 的第一个子元素
// const FirstChild = wrapper.firstChild;

// // 将视频插入到第一个子元素之前
// wrapper.insertBefore(Video, FirstChild);
// console.log(Video, 1);
// console.log(Div, 2);
// console.log(wrapper, 3);

// // 获取电脑电量
// export const getBatteryD = () => {
//   navigator.getBattery().then((battery) => {
//     if(battery.charging){
//         console.log("充电中");
//         return battery.level * 100 + "%" +'⚡'
//     }else{
//         console.log("未充电");
//         return battery.level * 100 + "%"
//     }
//   });
// };

/*         console.log(battery.level * 100 + "%");
        console.log(battery.charging); */
// 获取当前日期对象
export const today=() => {
  return new Date();
};

// 获取当前年份
export const year = today().getFullYear();

// 获取当前月份
export const month = String(today().getMonth() + 1).padStart(2, "0");

// 获取当前日期
export const day = String(today().getDate()).padStart(2, "0");

// 获取当前日期字符串 (月-日）
export const dayDate = `${year}-${month}-${day}`;

// // 获取时分秒
// export const hours = today().getHours().toString().padStart(2, "0");
// export const minutes = today().getMinutes().toString().padStart(2, "0");
// export const seconds = today().getSeconds().toString().padStart(2, "0");

let hours, minutes, seconds;

// 更新时间函数
function updateTime() {
  const now = new Date();
  hours = now.getHours().toString().padStart(2, "0");
  minutes = now.getMinutes().toString().padStart(2, "0");
  seconds = now.getSeconds().toString().padStart(2, "0");
}

// 初始调用以及每秒更新一次
updateTime(); // 确保初始时间被设置
setInterval(updateTime, 1000); // 每秒更新一次时间

// 获取当前时间的函数
export function getHMS() {
  return `${hours}:${minutes}:${seconds}`;
}


// 获取周几（中文）
const daysOfWeekChinese = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
export const dayOfWeek = daysOfWeekChinese[today().getDay()];


// 获取上午下午晚上傍晚凌晨
let periodOfDay;
const hour = today().getHours();
if(hour >= 6 && hour < 8){
  periodOfDay = "早上";
}else if (hour >= 8 && hour < 12) {
  periodOfDay = "上午";
} else if (hour >= 12 && hour < 18) {
  periodOfDay = "下午";
} else if (hour >= 18 && hour < 20) {
  periodOfDay = "傍晚";
} else if (hour >= 20 && hour < 24) {
  periodOfDay = "晚上";
} else {
  periodOfDay = "凌晨";
}
export const timeOfDay = periodOfDay;

export const textDate = dayDate + ' '+ dayOfWeek + ' ' + timeOfDay

