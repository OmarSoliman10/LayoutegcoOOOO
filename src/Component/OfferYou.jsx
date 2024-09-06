import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function OfferYou() {
  const { ref, inView } = useInView({
    triggerOnce: true,  // الحركة تحدث مرة واحدة فقط
    threshold: 0.01,    // النسبة المطلوبة لظهور العنصر على الشاشة (1% من العنصر يجب أن يكون مرئيًا)
  });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <>
      <section className="services light-background my-5">
        <div className="container section-title text-center my-5" data-aos="fade-up">
          <motion.h1
            className='heading fw-bolder text-center'
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            نقدم لك؟
          </motion.h1>

          <motion.p
            className='subheading fw-bold'
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            أهدافنا.. هي امتلاكنا لعدد كبير من المميزات حتى نتميز عن منافسينا
          </motion.p>
        </div>

        <motion.div
          className="container"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1 }}
        >
          <div className="row gy-4 text-center">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative">
                <i className="fa-regular fa-handshake icon"></i>
                <h3 style={{ color: "#0e776a" }}>تقديم حلول عصرية</h3>
                <p className='fs-6 fw-bold'>
                  نتميز في لاي أوت بتقديم كافة الحلول العصرية ومتابعة أحدث التطورات في عالم التسويق الرقمي والسوشيال ميديا، مع تقديم مقترحات لنمو أعمالك في كافة المجالات وتقديم خطة تسويقية متكاملة.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative">
                <i className="fa-solid fa-display icon"></i>
                <h3 style={{ color: "#0e776a" }}>تقديم خدمات متكاملة</h3>
                <p className='fs-6 fw-bold'>
                  نمتلك في لاي أوت فريق متخصص في كافة الخدمات التسويقية متخصص في الحملات الاعلانية، الموشن جرافيك، إدارة صفحات السوشيال ميديا، كتابة المحتوى الرقمي وغيرها من الخدمات المتكاملة.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative">
                <i className="fa-solid fa-arrow-trend-up icon"></i>
                <h3 style={{ color: "#0e776a" }}>التسويق وإعداد التقارير</h3>
                <p className='fs-6 fw-bold'>
                  لدينا متخصصين لإدارة حسابتكم علي جميع منصات التواصل الاجتماعي واقامة الحملات الاعلانية الممولة.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative">
                <i className="fa-solid fa-mobile-screen-button icon"></i>
                <h3 style={{ color: "#0e776a" }}>متابعة بعد انتهاء العمل</h3>
                <p className='fs-6 fw-bold'>
                  فريق خدمة عملاء متكامل ويبقى على تواصل معك بعد إستلام العمل لضمان سير العمل بشكل صحيح ومدى رضاءك عن جودة فريقنا.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative">
                <i className="fa-solid fa-phone icon"></i>
                <h3 style={{ color: "#0e776a" }}>خدمة عملاء متميزة</h3>
                <p className='fs-6 fw-bold'>
                  خدمة عملاء متصلون على مدار الساعة لتلقى طلباتكم واستفساراتكم والرد عليها سواء من خلال الواتساب، السوشيال ميديا، الايميل الإلكتروني.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item position-relative">
                <i className="fa-regular fa-clock icon"></i>
                <h3 style={{ color: "#0e776a" }}>الالتزام</h3>
                <p className='fs-6 fw-bold'>
                  نلتزم بالمواعيد والاتفاقات والتزامنا ينعكس على أعمالنا ونتميز ونبدع ودايم نفكر خارج الصندوق وبطرق غير تقليدية.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
