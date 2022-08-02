import * as React from "react";
import { Carousel } from "./3DCarousel";
// import "./styles.css";
// import { config } from "react-spring";
const Carousallayout = () => {
  return (
    <>
      <Carousel
        slides={[
          <div className="w-[300px] h-[200px] bg-white flex justify-center items-center">
            <div className="rounded-[3px] h-[200px] p-[14px] ml-auto mr-auto text-left">
              <div>
                <div className="flex text-[0.875rem] leading-[1.124rem]">
                  <div className="flex flex-col">
                    <div className="float-left mr-[10px] w-[64px] h-[64px] text-center rounded-[32px] overflow-hidden">
                      <img src="https://secure.justanswer.com/uploads/BL/blueflowers1063/2013-10-10_35834_KimHolidays1.64x64.jpg" alt="Kim D." />
                    </div>
                    <div className="flex clear-both float-left pt-[7px]">
                        <div>
                        <svg className="fill-[#00bf8f]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                        </div>
                        <div>
                        <svg className="fill-[#00bf8f]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                        </div>
                        <div>
                        <svg className="fill-[#00bf8f]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                        </div>
                        <div>
                        <svg className="fill-[#00bf8f]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                        </div>
                        <div>
                        <svg className="fill-[#00bf8f]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                        </div>
                    </div>

                  </div>
                  <div className="flex flex-col">
                    <p className="pt-[3px] text-[#333] max-h-[38px]">
                      Kim D.
                    </p>
                    <p className="pt-[3px] text-[#333] max-h-[38px]">
                      Consultant
                    </p>
                    <p className="pt-[3px] text-[#333] max-h-[38px]">
                      34 Satisfied customers
                    </p>
                  </div>
                </div>
                <p className="text-[.875rem] leading-[1.125rem] pt-[7px] text-[#666] clear-both break-words max-h-[80px] overflow-hidden text-ellipsis">
                Researcher 25 yrs in small and large institutions
                </p>
              </div>
            </div>
          </div>,
          <div className="w-[300px] h-[200px] bg-white flex justify-center items-center">
            <div className="rounded-[3px] h-[200px] p-[14px] ml-auto mr-auto text-left">
              <div>
                <div className="flex text-[0.875rem] leading-[1.124rem]">
                  <div className="flex flex-col">
                    <div className="float-left mr-[10px] w-[64px] h-[64px] text-center rounded-[32px] overflow-hidden">
                      <img src="https://secure.justanswer.com/uploads/BL/blueflowers1063/2013-10-10_35834_KimHolidays1.64x64.jpg" alt="Kim D." />
                    </div>
                    <div className="flex clear-both float-left pt-[7px]">
                        <div>
                        <svg className="fill-[#00bf8f]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                        </div>
                        <div>
                        <svg className="fill-[#00bf8f]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                        </div>
                        <div>
                        <svg className="fill-[#00bf8f]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                        </div>
                        <div>
                        <svg className="fill-[#00bf8f]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                        </div>
                        <div>
                        <svg className="fill-[#00bf8f]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                        </div>
                    </div>

                  </div>
                  <div className="flex flex-col">
                    <p className="pt-[3px] text-[#333] max-h-[38px]">
                      Kim D.
                    </p>
                    <p className="pt-[3px] text-[#333] max-h-[38px]">
                      Consultant
                    </p>
                    <p className="pt-[3px] text-[#333] max-h-[38px]">
                      34 Satisfied customers
                    </p>
                  </div>
                </div>
                <p className="text-[.875rem] leading-[1.125rem] pt-[7px] text-[#666] clear-both break-words max-h-[80px] overflow-hidden text-ellipsis">
                Researcher 25 yrs in small and large institutions
                </p>
              </div>
            </div>
          </div>,
          <div className="w-[300px] h-[200px] bg-white flex justify-center items-center">
             <div className="rounded-[3px] h-[200px] p-[14px] ml-auto mr-auto text-left">
              <div>
                <div className="flex text-[0.875rem] leading-[1.124rem]">
                  <div className="flex flex-col">
                    <div className="float-left mr-[10px] w-[64px] h-[64px] text-center rounded-[32px] overflow-hidden">
                      <img src="https://secure.justanswer.com/uploads/BL/blueflowers1063/2013-10-10_35834_KimHolidays1.64x64.jpg" alt="Kim D." />
                    </div>
                    <div className="flex clear-both float-left pt-[7px]">
                        <div>
                        <svg className="fill-[#00bf8f]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                        </div>
                        <div>
                        <svg className="fill-[#00bf8f]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                        </div>
                        <div>
                        <svg className="fill-[#00bf8f]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                        </div>
                        <div>
                        <svg className="fill-[#00bf8f]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                        </div>
                        <div>
                        <svg className="fill-[#00bf8f]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                        </div>
                    </div>

                  </div>
                  <div className="flex flex-col">
                    <p className="pt-[3px] text-[#333] max-h-[38px]">
                      Kim D.
                    </p>
                    <p className="pt-[3px] text-[#333] max-h-[38px]">
                      Consultant
                    </p>
                    <p className="pt-[3px] text-[#333] max-h-[38px]">
                      34 Satisfied customers
                    </p>
                  </div>
                </div>
                <p className="text-[.875rem] leading-[1.125rem] pt-[7px] text-[#666] clear-both break-words max-h-[80px] overflow-hidden text-ellipsis">
                Researcher 25 yrs in small and large institutions
                </p>
              </div>
            </div>
          </div>,
        ]}
      />
    </>
  );
};

export default Carousallayout;
