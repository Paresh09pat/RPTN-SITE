
import React, { useState } from 'react';
import "./Contact.css";

function Contact1() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleQuestionClick = (questionId) => {
    if (activeQuestion === questionId) {
      // If the clicked question is the same as the active one, close it
      setActiveQuestion(null);
    } else {
      // If the clicked question is different, set it as the active one
      setActiveQuestion(questionId);
    }
  };

  return (
    <>
      <div className="body__first">
        <div className="faqfaq " style={{ color: "#07abf1" }}>
          <h1>FAQ</h1>
        </div>
        <br />
        <div className="content">
          {/* 1 */}
          <div>
            <input
              type="checkbox"
              id="question1"
              name="q"
              className="questions"
              checked={activeQuestion === "question1"}
              onChange={() => handleQuestionClick("question1")}
            />
            <div className="plus">+</div>
            <label htmlFor="question1" className="question">
              What is the RP Tech Novelty?
            </label>
            {activeQuestion === "question1" && (
              <div className="answers">
                RedPhantom Tech Novelty is a recognized Software company
                Technical solution that use trending technology &amp; aspires
                where people may interact with future technology in the present.
              </div>
            )}
          </div>
          {/* 2 */}
          <div>
            <input
              type="checkbox"
              id="question2"
              name="q"
              className="questions"
              checked={activeQuestion === "question2"}
              onChange={() => handleQuestionClick("question2")}
            />
            <div className="plus">+</div>
            <label htmlFor="question2" className="question">
              What is the Vision and Mission of RP Tech Novelty?
            </label>
            {activeQuestion === "question2" && (
              <div className="answers">
                Vision is important and "To be the prestigious and leading
                industry of entire market ... This program conducted by
                RedPhantom Tech Novelty Private Limited.
              </div>
            )}
          </div>

          {/* 3 */}
          <div>
            <input
              type="checkbox"
              id="question3"
              name="q"
              className="questions"
              checked={activeQuestion === "question3"}
              onChange={() => handleQuestionClick("question3")}
            />
            <div className="plus">+</div>
            <label htmlFor="question3" className="question">
              What is the Motto of RP Tech Novelty?
            </label>
            {activeQuestion === "question3" && (
              <div className="answers">
                To be a globally recognized company offering unparalleled
                business solutions that use cutting-edge technology &amp;
                aspires to provide a platform where people...
              </div>
            )}
          </div>

          {/* 4 */}
          <div>
            <input
              type="checkbox"
              id="question4"
              name="q"
              className="questions"
              checked={activeQuestion === "question4"}
              onChange={() => handleQuestionClick("question4")}
            />
            <div className="plus">+</div>
            <label htmlFor="question4" className="question">
              When the RPTN is Established?
            </label>
            {activeQuestion === "question4" && (
              <div className="answers">
                Redphantom Tech Novelty Private Limited is a Private
                incorporated on 01 October 2021. It is classified as a Non-govt
                company and is registered at Registrar of Companies, Pune....
              </div>
            )}
          </div>

          {/* 5 */}
          <div>
            <input
              type="checkbox"
              id="question5"
              name="q"
              className="questions"
              checked={activeQuestion === "question5"}
              onChange={() => handleQuestionClick("question5")}
            />
            <div className="plus">+</div>
            <label htmlFor="question5" className="question">
            What is the Services provided by RP Tech Novelty?
            </label>
            {activeQuestion === "question5" && (
              <div className="answers">
                 We partner with business to provider innovative solutions for
                their critical IT operation. We provide end-to-end solutions
                from concept and strategy, to design ... ....
              </div>
            )}
          </div>


          {/* 6 */}

          <div>
            <input
              type="checkbox"
              id="question6"
              name="q"
              className="questions"
              checked={activeQuestion === "question6"}
              onChange={() => handleQuestionClick("question6")}
            />
            <div className="plus">+</div>
            <label htmlFor="question6" className="question">
              When the RPTN is Established?
            </label>
            {activeQuestion === "question6" && (
              <div className="answers">
                Redphantom Tech Novelty Private Limited is a Private
                incorporated on 01 October 2021. It is classified as a Non-govt
                company and is registered at Registrar of Companies, Pune....
              </div>
            )}
          </div>

          {/* 7 */}
          <div>
            <input
              type="checkbox"
              id="question7"
              name="q"
              className="questions"
              checked={activeQuestion === "question7"}
              onChange={() => handleQuestionClick("question7")}
            />
            <div className="plus">+</div>
            <label htmlFor="question7" className="question">
            How RPTN solve the modern problems using technologies?
            </label>
            {activeQuestion === "question7" && (
              <div className="answers">
              Using technology to solve problems does not involve “thinking
                 outside the box.” It involves thinking from a different box, one
                 that harnesses knowledge to bring about a radical change.
                 Technology for transformation redefines human life and makes the
                 impossible possible. Small technologies can solve big
                 problems.....
              </div>
            )}
          </div>

          {/* 8 */}

          <div>
            <input
              type="checkbox"
              id="question8"
              name="q"
              className="questions"
              checked={activeQuestion === "question8"}
              onChange={() => handleQuestionClick("question8")}
            />
            <div className="plus">+</div>
            <label htmlFor="question8" className="question">
            What is the Motto of RP Tech Novelty?
            </label>
            {activeQuestion === "question8" && (
              <div className="answers">
              To be a globally recognized company offering unparalleled
              business solutions that use cutting-edge technology &amp;
              aspires to provides a platform where people ....
              </div>
            )}
          </div>

          {/* 9 */}

          <div>
            <input
              type="checkbox"
              id="question9"
              name="q"
              className="questions"
              checked={activeQuestion === "question9"}
              onChange={() => handleQuestionClick("question9")}
            />
            <div className="plus">+</div>
            <label htmlFor="question9" className="question">
            how to RPTN is unique?
            </label>
            {activeQuestion === "question9" && (
              <div className="answers">
              To be a globally recognized company offering unparalleled
              business solutions that use cutting-edge technology &amp;
              aspires to provides a platform where people ....
              </div>
            )}
          </div>

          {/* 10 */}
          <div>
            <input
              type="checkbox"
              id="question10"
              name="q"
              className="questions"
              checked={activeQuestion === "question10"}
              onChange={() => handleQuestionClick("question10")}
            />
            <div className="plus">+</div>
            <label htmlFor="question10" className="question">
            What are the new Technologies used and developed by RPTN?
            </label>
            {activeQuestion === "question10" && (
              <div className="answers">
              From a birds eye view, a blockchain developer specializes in
              developing and implementing architecture and solutions using
              blockchain technology.....
              </div>
            )}
          </div>

       
          {/* 11 */}
          <div>
            <input
              type="checkbox"
              id="question11"
              name="q"
              className="questions"
              checked={activeQuestion === "question11"}
              onChange={() => handleQuestionClick("question11")}
            />
            <div className="plus">+</div>
            <label htmlFor="question11" className="question">
            How the RPTN is Unique?
            </label>
            {activeQuestion === "question11" && (
              <div className="answers">
              To be a globally recognized company offering unparalleled
                business solutions that use cutting-edge technology &amp;
                aspires to provides a platform where people ......
              </div>
            )}
          </div>

       
          {/* 12 */}
          <div>
            <input
              type="checkbox"
              id="question12"
              name="q"
              className="questions"
              checked={activeQuestion === "question12"}
              onChange={() => handleQuestionClick("question12")}
            />
            <div className="plus">+</div>
            <label htmlFor="question12" className="question">
            How RPTN enhanced in Securities?
            </label>
            {activeQuestion === "question12" && (
              <div className="answers">
              To be a globally recognized company offering unparalleled
                business solutions that use cutting-edge technology &amp;
                aspires to provides a platform where people ......
              </div>
            )}
          </div>

       
          {/* 13 */}
          <div>
            <input
              type="checkbox"
              id="question13"
              name="q"
              className="questions"
              checked={activeQuestion === "question13"}
              onChange={() => handleQuestionClick("question13")}
            />
            <div className="plus">+</div>
            <label htmlFor="question13" className="question">
            How RPTN helps youth in career?
            </label>
            {activeQuestion === "question13" && (
              <div className="answers">
              To be a globally recognized company offering unparalleled
                business solutions that use cutting-edge technology &amp;
                aspires to provides a platform where people ......
              </div>
            )}
          </div>

       
          {/* 14 */}
          <div>
            <input
              type="checkbox"
              id="question14"
              name="q"
              className="questions"
              checked={activeQuestion === "question14"}
              onChange={() => handleQuestionClick("question14")}
            />
            <div className="plus">+</div>
            <label htmlFor="question14" className="question">
            how can you get job in RPTN?
            </label>
            {activeQuestion === "question14" && (
              <div className="answers">
              To be a globally recognized company offering unparalleled
                business solutions that use cutting-edge technology &amp;
                aspires to provides a platform where people ......
              </div>
            )}
          </div>

       
          {/* 15 */}
          <div>
            <input
              type="checkbox"
              id="question15"
              name="q"
              className="questions"
              checked={activeQuestion === "question15"}
              onChange={() => handleQuestionClick("question15")}
            />
            <div className="plus">+</div>
            <label htmlFor="question15" className="question">
            What are the eligibility criteria to apply job at RPTN?
            </label>
            {activeQuestion === "question15" && (
              <div className="answers">
              To be a globally recognized company offering unparalleled
                business solutions that use cutting-edge technology &amp;
                aspires to provides a platform where people ......
              </div>
            )}
          </div>

       
          {/* 16 */}
          <div>
            <input
              type="checkbox"
              id="question16"
              name="q"
              className="questions"
              checked={activeQuestion === "question16"}
              onChange={() => handleQuestionClick("question16")}
            />
            <div className="plus">+</div>
            <label htmlFor="question16" className="question">
            Do you offer any Freelancing Service?
            </label>
            {activeQuestion === "question16" && (
              <div className="answers">
              To be a globally recognized company offering unparalleled
                business solutions that use cutting-edge technology &amp;
                aspires to provides a platform where people ......
              </div>
            )}
          </div>

       
          {/* 17 */}
          <div>
            <input
              type="checkbox"
              id="question17"
              name="q"
              className="questions"
              checked={activeQuestion === "question17"}
              onChange={() => handleQuestionClick("question17")}
            />
            <div className="plus">+</div>
            <label htmlFor="question17" className="question">
            Do you have specific feature for cyber security?
            </label>
            {activeQuestion === "question17" && (
              <div className="answers">
              To be a globally recognized company offering unparalleled
                business solutions that use cutting-edge technology &amp;
                aspires to provides a platform where people ......
              </div>
            )}
          </div>

       
          {/* 18 */}
          <div>
            <input
              type="checkbox"
              id="question18"
              name="q"
              className="questions"
              checked={activeQuestion === "question18"}
              onChange={() => handleQuestionClick("question18")}
            />
            <div className="plus">+</div>
            <label htmlFor="question18" className="question">
            How RPTN step into Nanotechnology?
            </label>
            {activeQuestion === "question18" && (
              <div className="answers">
              To be a globally recognized company offering unparalleled
                business solutions that use cutting-edge technology &amp;
                aspires to provides a platform where people ......
              </div>
            )}
          </div>

       
          {/* 19 */}
          <div>
            <input
              type="checkbox"
              id="question19"
              name="q"
              className="questions"
              checked={activeQuestion === "question19"}
              onChange={() => handleQuestionClick("question19")}
            />
            <div className="plus">+</div>
            <label htmlFor="question19" className="question">
            Do you have Any product related to Blockchain Technology?
            </label>
            {activeQuestion === "question19" && (
              <div className="answers">
              To be a globally recognized company offering unparalleled
                business solutions that use cutting-edge technology &amp;
                aspires to provides a platform where people ......
              </div>
            )}
          </div>

       
          {/* 20 */}
          <div>
            <input
              type="checkbox"
              id="question20"
              name="q"
              className="questions"
              checked={activeQuestion === "question20"}
              onChange={() => handleQuestionClick("question20")}
            />
            <div className="plus">+</div>
            <label htmlFor="question20" className="question">
            is there any Solution for recycling AI products?
            </label>
            {activeQuestion === "question20" && (
              <div className="answers">
              To be a globally recognized company offering unparalleled
                business solutions that use cutting-edge technology &amp;
                aspires to provides a platform where people ......
              </div>
            )}
          </div>

       
          {/* 21 */}
          <div>
            <input
              type="checkbox"
              id="question21"
              name="q"
              className="questions"
              checked={activeQuestion === "question21"}
              onChange={() => handleQuestionClick("question21")}
            />
            <div className="plus">+</div>
            <label htmlFor="question21" className="question">
            How RPTN helps youth in career?
            </label>
            {activeQuestion === "question21" && (
              <div className="answers">
              Redphantom Tech Novelty Private Limited is a Private
                incorporated on 01 October 2021. It is classified as a Non-govt
                company and is registered at Registrar of Companies, Pune....
              </div>
            )}
          </div>

          {/* 22 */}
          <div>
            <input
              type="checkbox"
              id="question22"
              name="q"
              className="questions"
              checked={activeQuestion === "question22"}
              onChange={() => handleQuestionClick("question22")}
            />
            <div className="plus">+</div>
            <label htmlFor="question22" className="question">
            How do I get in touch with the organization?
            </label>
            {activeQuestion === "question22" && (
              <div className="answers">
                Redphantom Tech Novelty Private Limited is a Private
                incorporated on 01 October 2021. It is classified as a Non-govt
                company and is registered at Registrar of Companies, Pune....
              </div>
            )}
          </div>

       
        </div>
      </div>
    </>
  );
}

export default Contact1;