let colors = ['#F25F5C', '#B6D7B9', '#00A7E1', '#F7A072', '#FF9B42']

let quotes = [
  {
    quote: 'ความเฉลียวฉลาดจะคอยเฝ้าเจ้า และความเข้าใจจะระแวดระวังเจ้าไว้',
    chapters: '2:11'
  },
  {
    quote: 'จงวางใจในพระยาห์เวห์ด้วยสุดใจของเจ้า และอย่าพึ่งพาความรอบรู้ของตนเอง จงยอมรับรู้พระองค์ในทุกทางของเจ้า แล้วพระองค์เองจะทรงทำให้วิถีของเจ้าราบรื่น',
    chapters: '3:5-6'
  },
  {
    quote: 'จงถวายพระเกียรติแด่พระยาห์เวห์ด้วยทรัพย์สินของเจ้า และด้วยผลแรกแห่งผลิตผลทุกอย่างของเจ้า แล้วยุ้งของเจ้าจะเต็มบริบูรณ์ และบ่อเก็บของเจ้าจะล้นด้วยเหล้าองุ่นหมักใหม่',
    chapters: '3:9-10'
  },
  {
    quote: 'มนุษย์ผู้พบปัญญา และมนุษย์ผู้ได้ความเข้าใจ ก็เป็นสุขจริงหนอ เพราะผลที่ได้จากปัญญาย่อมดีกว่าผลที่ได้จากเงิน และผลิตผลของปัญญานั้นดีกว่าทองคำ',
    chapters: '3:13-14'
  },
  {
    quote: 'อย่าตักเตือนคนชอบเยาะเย้ย เพราะเขาจะเกลียดเจ้า จงตักเตือนคนมีปัญญา และเขาจะรักเจ้า',
    chapters: '9:8'
  },
  {
    quote: 'ความยำเกรงพระยาห์เวห์เป็นที่เริ่มต้นของปัญญา และการรู้จักองค์บริสุทธิ์เป็นความรอบรู้',
    chapters: '9:10'
  },
  {
    quote: 'มือที่เกียจคร้านทำให้ยากจน แต่มือที่ขยันขันแข็งทำให้มั่งคั่ง',
    chapters: '10:4'
  },
  {
    quote: 'คนที่รักคำสั่งสอนก็รักความรู้ แต่คนที่เกลียดคำตักเตือนก็โง่เขลา',
    chapters: '12:1'
  },
  {
    quote: 'ทางของคนโง่นั้นถูกต้องในสายตาของเขาเอง แต่คนที่ยอมฟังคำแนะนำก็ฉลาด',
    chapters: '12:15'
  },
  {
    quote: 'คนดีเป็นที่โปรดปรานของพระเยโฮวาห์ แต่คนที่คิดการชั่วร้ายพระองค์จะทรงตำหนิ',
    chapters: '12:2'
  },
  {
    quote: 'ความกระวนกระวายในใจของมนุษย์ถ่วงเขาลง แต่ถ้อยคำที่ดีกระทำให้เขาชื่นชม',
    chapters: '12:25'
  },
  {
    quote: 'ในวิถีของความชอบธรรมมีชีวิต และในทางนั้นไม่มีความมรณา',
    chapters: '12:28'
  },
  {
    quote: 'บุคคลที่ระแวดระวังปากของเขาจะสงวนชีวิตของเขา แต่บุคคลที่เปิดริมฝีปากกว้างก็จะมาถึงความพินาศ',
    chapters: '13:3'
  },
  {
    quote: 'บุคคลผู้ดูหมิ่นพระวจนะจะถูกทำลาย แต่บุคคลผู้เกรงกลัวพระบัญญัติจะได้รับบำเหน็จ',
    chapters: '13:13'
  },
  {
    quote: 'บรรดาคนที่หยั่งรู้กระทำทุกอย่างด้วยความรู้ แต่คนโง่ก็อวดความโง่ของตน',
    chapters: '13:16'
  },
  {
    quote: 'บุคคลที่เดินกับปราชญ์จะกลายเป็นคนฉลาด แต่เพื่อนฝูงของคนโง่จะถูกทำลาย',
    chapters: '13:20'
  },
  {
    quote: 'คนรู้น้อยเชื่อทุกอย่าง แต่คนสุขุมพิเคราะห์ดูย่างก้าวของตน',
    chapters: '14:15'
  },
  {
    quote: 'บุคคลที่โกรธช้าก็มีความเข้าใจมาก แต่บุคคลที่โมโหเร็วก็ยกย่องความโง่',
    chapters: '14:29'
  },
  {
    quote: 'คำตอบนุ่มนวลช่วยละลายความโกรธเกรี้ยวให้หายไป แต่คำกักขฬะเร้าโทสะ',
    chapters: '15:1'
  },
  {
    quote: 'ใจยินดีทำให้ใบหน้าแช่มชื่น แต่เมื่อใจเศร้าหมอง ดวงจิตก็สลาย',
    chapters: '15:13'
  },
  {
    quote: 'กินผักเป็นอาหารในที่ที่มีความรัก ก็ดีกว่ากินเนื้อวัวอ้วนโดยมีความเกลียดชังอยู่ด้วย',
    chapters: '15:17'
  },
  {
    quote: 'ความยำเกรงพระยาห์เวห์จะสอนให้เกิดปัญญา และความถ่อมตัวมาก่อนเกียรติ',
    chapters: '15:33'
  },
  {
    quote: 'แผนงานความคิดเป็นของมนุษย์ แต่คำตอบของลิ้นมาจากพระยาห์เวห์',
    chapters: '16:1'
  },
  {
    quote: 'จงมอบงานของเจ้าไว้กับพระยาห์เวห์ แล้วแผนงานของเจ้าจะได้รับการสถาปนา',
    chapters: '16:3'
  },
  {
    quote: 'มิตรสหายย่อมรักกันทุกเวลา และพี่น้องเกิดมาเพื่อช่วยกันยามทุกข์ยาก',
    chapters: '17:17'
  },
  {
    quote: 'ผู้รักการละเมิดก็รักการวิวาท ผู้ทำประตูบ้านของตนให้สูงก็แสวงหาการทำลาย',
    chapters: '17:19'
  },
  {
    quote: 'ผู้รักการละเมิดก็รักการวิวาท ผู้ทำประตูบ้านของตนให้สูงก็แสวงหาการทำลาย',
    chapters: '17:22'
  },
  {
    quote: 'แม้คนโง่หากนิ่งเสียก็นับว่ามีปัญญา เมื่อเขาปิดปากของตนก็นับว่ามีความคิด',
    chapters: '17:28'
  },
  {
    quote: 'ใครพบภรรยาก็พบของดี และได้ความโปรดปรานจากพระยาห์เวห์',
    chapters: '18:22'
  },
  {
    quote: 'ทรัพย์สมบัติทำให้มีเพื่อนมากมาย แต่คนยากจนก็ถูกเพื่อนตีจาก',
    chapters: '19:4'
  },
  {
    quote: 'อย่ารักการนอน เกรงว่าเจ้าจะยากจน จงลืมตาของเจ้า แล้วเจ้าจะได้กินอิ่ม',
    chapters: '20:13'
  },
  {
    quote: 'มรดกที่ได้มาอย่างชิงสุกก่อนห่าม ที่สุดปลายก็ไม่เป็นมงคล',
    chapters: '20:21'
  },
  {
    quote: 'จงฝึกเด็กในทางที่เขาควรจะเดินไป และเมื่อเขาเติบใหญ่ เขาจะไม่พรากจากทางนั้น',
    chapters: '22:6'
  },
  {
    quote: 'อย่าเปรมปรีดิ์เมื่อศัตรูของเจ้าล้ม และอย่าให้ใจของเจ้ายินดีเมื่อเขาสะดุด',
    chapters: '24:17'
  },
  {
    quote: 'ถ้าศัตรูของเจ้าหิว จงให้อาหารเขากิน และถ้าเขากระหาย จงให้น้ำเขาดื่ม',
    chapters: '25:21'
  },
  {
    quote: 'สุภาษิตที่อยู่ในปากของคนโง่ ก็เหมือนขาของคนพิการที่ห้อยอยู่อย่างไร้ประโยชน์',
    chapters: '26:7'
  },
  {
    quote: 'อย่าคุยอวดถึงพรุ่งนี้ เพราะเจ้าไม่ทราบว่าวันหนึ่งๆ จะนำอะไรมาให้บ้าง',
    chapters: '27:1'
  },
  {
    quote: 'ว่ากันต่อหน้า ดีกว่ารักกันลับๆ',
    chapters: '27:5'
  },
  {
    quote: 'ความหยิ่งของคนนำเขาให้ต่ำลง แต่คนถ่อมตัวจะได้รับเกียรติ',
    chapters: '29:23'
  },
]

document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

let quote = quotes[Math.floor(Math.random() * quotes.length)]

document.getElementById('quote').innerHTML = quote.quote
document.getElementById('chapters').innerHTML = 'สุภาษิต ' + quote.chapters