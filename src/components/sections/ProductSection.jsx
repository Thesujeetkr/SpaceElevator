import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import whiteArrow from "../../assets/white-arrow.png";
import productimg1 from '../../assets/img/item-img.jpg'
import productimg2 from '../../assets/img/item-img2.jpg'
import productimg3 from '../../assets/img/item-img3.jpg'
import productimg4 from '../../assets/img/item-img4.jpg'
import productimg5 from '../../assets/img/item-img5.jpg'
import productimg6 from '../../assets/img/item-img6.jpg'
import threeArrow from '../../assets/img/three-down-arrow.png'
import liftIcon from '../../assets/img/lift-img.png'
import liftBottom1 from '../../assets/img/Ellipse1.png'
import liftBottom2 from '../../assets/img/Ellipse2.png'
import liftBottom3 from '../../assets/img/Ellipse3.png'
import liftBottom4 from '../../assets/img/Ellipse4.png'

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const liftRef = useRef(null);
  const lineRef = useRef(null);
  const sectionsRef = useRef([]);

  const productData = [
    {
      id: 1,
      title: "Hospital Lift",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, consequuntur maiores accusantium totam quisquam optio, cum fugiat nihil quis earum excepturi, tempora consectetur dolores officiis perspiciatis voluptatem deleniti corporis architecto unde laboriosam cupiditate incidunt maxime necessitatibus! Voluptas, corporis assumenda?",
      image: productimg1,
      arrowIcon: whiteArrow,
    },
    {
      id: 2,
      title: "Hotel Elevator",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, consequuntur maiores accusantium totam quisquam optio, cum fugiat nihil quis earum excepturi, tempora consectetur dolores officiis perspiciatis voluptatem deleniti corporis architecto unde laboriosam cupiditate incidunt maxime necessitatibus! Voluptas, corporis assumenda?",
      image: productimg2,
      arrowIcon: whiteArrow,
    },
    {
      id: 3,
      title: "Hotel Elevator",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, consequuntur maiores accusantium totam quisquam optio, cum fugiat nihil quis earum excepturi, tempora consectetur dolores officiis perspiciatis voluptatem deleniti corporis architecto unde laboriosam cupiditate incidunt maxime necessitatibus! Voluptas, corporis assumenda?",
      image: productimg3,
      arrowIcon: whiteArrow,
    },
    {
      id: 4,
      title: "Hotel Elevator",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, consequuntur maiores accusantium totam quisquam optio, cum fugiat nihil quis earum excepturi, tempora consectetur dolores officiis perspiciatis voluptatem deleniti corporis architecto unde laboriosam cupiditate incidunt maxime necessitatibus! Voluptas, corporis assumenda?",
      image: productimg4,
      arrowIcon: whiteArrow,
    },
    {
      id: 5,
      title: "Hotel Elevator",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, consequuntur maiores accusantium totam quisquam optio, cum fugiat nihil quis earum excepturi, tempora consectetur dolores officiis perspiciatis voluptatem deleniti corporis architecto unde laboriosam cupiditate incidunt maxime necessitatibus! Voluptas, corporis assumenda?",
      image: productimg5,
      arrowIcon: whiteArrow,
    },
    {
      id: 6,
      title: "Hotel Elevator",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, consequuntur maiores accusantium totam quisquam optio, cum fugiat nihil quis earum excepturi, tempora consectetur dolores officiis perspiciatis voluptatem deleniti corporis architecto unde laboriosam cupiditate incidunt maxime necessitatibus! Voluptas, corporis assumenda?",
      image: productimg6,
      arrowIcon: whiteArrow,
    },
  ];

  const removeHighlights = (sections) => {
    sections.forEach((section) => {
      if (section) {
        const title = section.querySelector(".proTitle");
        const circle = section.querySelector(".circle");
        const circleArrow = section.querySelector(".circle img");
        const snumber = section.querySelector(".snumber");

        if (title) {
          title.classList.remove("highlighted");
        }
        if (circle) {
          circle.classList.remove("blue-circleActive");
        }
        if (snumber) {
          snumber.classList.remove("snumber-highlighted");
        }
        if (circleArrow) {
          circleArrow.classList.remove("arrow-animated");
        }
      }
    });
  };

  const addHighlights = (activeSection) => {
    if (activeSection) {
      const activeTitle = activeSection.querySelector(".proTitle");
      const activeCircle = activeSection.querySelector(".circle");
      const activeCircleArrow = activeSection.querySelector(".circle img");
      const activeSnumber = activeSection.querySelector(".snumber");

      if (activeTitle) {
        activeTitle.classList.add("highlighted");
      }
      if (activeCircle) {
        activeCircle.classList.add("blue-circleActive");
      }
      if (activeSnumber) {
        activeSnumber.classList.add("snumber-highlighted");
      }
      if (activeCircleArrow) {
        activeCircleArrow.classList.add("arrow-animated");
      }
    }
  };

useEffect(() => {
  const liftEl = liftRef.current;
  const lineEl = lineRef.current;
  const sections = sectionsRef.current;

  if (!liftEl || !lineEl || !sections.length) return;

  ScrollTrigger.getAll().forEach((t) => t.kill());

  let sectionData = [];
  const updateSectionData = () => {
    sectionData = sections
      .filter((s) => s) // ✅ filter out nulls
      .map((section) => {
        const rect = section.getBoundingClientRect();
        return {
          el: section,
          top: rect.top + window.scrollY,
          bottom: rect.top + window.scrollY + rect.height,
        };
      });
  };

  updateSectionData();

  let lastActive = null;

  gsap.to(liftEl, {
    y: () => lineEl.offsetHeight - liftEl.offsetHeight,
    ease: "none",
    scrollTrigger: {
      trigger: lineEl,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.6,
      invalidateOnRefresh: true,
      onRefresh: updateSectionData,
      onUpdate: () => {
        if (!sectionData.length) return; // ✅ guard against empty

        const liftRect = liftEl.getBoundingClientRect();
        const liftCenter =
          liftRect.top + window.scrollY + liftRect.height / 2;

        const active = sectionData.find(
          (s) => liftCenter >= s.top && liftCenter <= s.bottom
        );

        if (active && active.el !== lastActive) {
          removeHighlights(sections);
          addHighlights(active.el);
          lastActive = active.el;
        }
      },
    },
  });

  // ✅ Refresh after images load
  const imgs = document.querySelectorAll(".prod-sec img");
  let loaded = 0;
  imgs.forEach((img) => {
    if (img.complete) {
      loaded++;
    } else {
      img.onload = () => {
        loaded++;
        if (loaded === imgs.length) ScrollTrigger.refresh();
      };
    }
  });

  const refreshTimeout = setTimeout(() => ScrollTrigger.refresh(), 500);
  window.addEventListener("resize", ScrollTrigger.refresh);

  return () => {
    clearTimeout(refreshTimeout);
    window.removeEventListener("resize", ScrollTrigger.refresh);
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}, []);


  return (
    <div className="prod-sec relative w-full py-30 max-w-7xl mx-auto z-5">
      <div className="secTitles text-center mb-20 ">
        <h2 className="section-title text-7xl">Our Product</h2>
        <p className="text-4xl font-bold leading-0 ">
          Our <span className="">Product</span>
        </p>
      </div>

      <div className="relative h-full">
        <div className="lift-icon" ref={liftRef}>
          <img src={liftIcon} alt="Lift" />
        </div>

        <div className="arrow">
          <img src={threeArrow} alt="Down Arrows" />
        </div>

        <div className="verticle-line" ref={lineRef}></div>

        {productData.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="prod-list relative mt-10 flex gap-5 w-full h-full pt-10 items-center"
          >
            {index % 2 === 0 ? (
              <>
                <div className="w-full">
                  <div className="pro-1 flex flex-col">
                    <div className="snumber text-7xl font-bold">
                      <span>{product.id}</span>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="circle w-[135px] h-[135px] rounded-full flex justify-center items-center bg-blue-500">
                        <img src={product.arrowIcon} className="h-10" alt="" />
                      </div>
                      <div className="w-[calc(100%-135px)]">
                        <h3 className="proTitle text-3xl mb-3">
                          {product.title}
                        </h3>
                        <p className="text-sm w-[70%] text-[#FFFFFFC2]">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="img-overlay relative">
                    <div className="blackshade1 "></div>
                    <div className="blackshade2 "></div>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto relative z-0"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-full">
                  <div className="img-overlay relative">
                    <div className="blackshade3"></div>
                    <div className="blackshade4"></div>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto relative z-0"
                    />
                  </div>
                </div>

                <div className="w-full pl-5 py-28 ">
                  <div className="pro-1 pro-2 flex flex-col ml-20">
                    <div className="snumber text-7xl font-bold">
                      <span>{product.id}</span>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="circle w-[135px] h-[135px] rounded-full flex justify-center items-center bg-blue-500">
                        <img src={product.arrowIcon} className="h-10" alt="" />
                      </div>
                      <div className="w-[calc(100%-135px)]">
                        <h3 className="proTitle text-3xl mb-3">
                          {product.title}
                        </h3>
                        <p className="text-sm w-[80%] text-[#FFFFFFC2]">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}

        {/* Bottom Ellipses */}
        <div className="relative h-[80px]">
          <div className="w-full absolute">
            <div className="verticle-linebase text-center">
              <div className="oval-shape el">
                <img src={liftBottom1} alt="Ellipse 1" />
              </div>
              <div className="oval-shape el-2">
                <img src={liftBottom2} alt="Ellipse 2" />
              </div>
              <div className="oval-shape el-3">
                <img src={liftBottom3} alt="Ellipse 3" />
              </div>
              <div className="oval-shape el-4">
                <img src={liftBottom4} alt="Ellipse 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
